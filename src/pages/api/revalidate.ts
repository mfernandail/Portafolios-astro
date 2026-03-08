import type { APIRoute } from 'astro'

/**
 * Endpoint para trigger un rebuild desde Supabase webhooks
 * Vercel Build Hook debe estar configurado en las variables de entorno
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    // Verificar que la petición viene de Supabase (opcional pero recomendado)
    const authHeader = request.headers.get('authorization')
    const WEBHOOK_SECRET = import.meta.env.SUPABASE_WEBHOOK_SECRET

    if (WEBHOOK_SECRET && authHeader !== `Bearer ${WEBHOOK_SECRET}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Obtener el Deploy Hook URL de Vercel desde variables de entorno
    const VERCEL_DEPLOY_HOOK = import.meta.env.VERCEL_DEPLOY_HOOK

    if (!VERCEL_DEPLOY_HOOK) {
      return new Response(
        JSON.stringify({ error: 'VERCEL_DEPLOY_HOOK no configurado' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    // Trigger el deploy en Vercel
    const response = await fetch(VERCEL_DEPLOY_HOOK, {
      method: 'POST',
    })

    if (!response.ok) {
      throw new Error(`Vercel deploy hook falló: ${response.statusText}`)
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Deploy triggered successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error en revalidation:', error)
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
