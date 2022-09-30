import "reflect-metadata";

import path from "node:path";

import { AppointmentResolver } from "./resolvers/appointments-resolver";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log("🚀 ~ Server Running", url);
}

bootstrap();
