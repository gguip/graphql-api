import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Appointment } from "./../dtos/models/appointment-modal";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Customer } from "../dtos/models/customer-modal";

@Resolver(() => Appointment)
export class AppointmentResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      },
    ];
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg("data") data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    console.log(
      "🚀 ~ file: appointments-resolver.ts ~ line 25 ~ AppointmentResolver ~ customer ~ appointment",
      appointment
    );

    return {
      name: "John Doe",
    };
  }
}
