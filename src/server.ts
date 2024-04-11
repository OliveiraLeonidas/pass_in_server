import fastify from 'fastify'
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'
import { createEvent } from './routes/create-event';

const app = fastify()
app.register(createEvent)

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.listen({port: 3333}).then(() => {
    console.log(`HTTP server is running on http://localhost:${3333} 🕒`)
})