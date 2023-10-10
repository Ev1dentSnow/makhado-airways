"use client";

import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {Check, ChevronsUpDown } from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "../ui/command";

const equipment = [
	"ZS-ZWM | B738",
	"ZS-GAC | A320"
];

const formSchema = z.object({
	departureICAO: z.string().min(4, {
		message: "Departure ICAO code must be 4 characters long"
	}).max(4, {
		message: "Departure ICAO code must be 4 characters long"
	}),
	arrivalICAO: z.string().min(4, {
		message: "Arrival ICAO code must be 4 characters long"
	}).max(4, {
		message: "Arrival ICAO code must be 4 characters long"
	}),
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	equipment: z.enum(equipment),
});

export default function DispatchForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			departureICAO: "",
			arrivalICAO: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {

	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="departureICAO"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Departure Airport ICAO</FormLabel>
							<FormControl>
								<Input placeholder="Enter an ICAO" {...field} />
							</FormControl>
							<FormDescription>

							</FormDescription>
							<FormMessage />
						</FormItem>

					)}
				/>
				<FormField
					control={form.control}
					name="arrivalICAO"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Arrival Airport ICAO</FormLabel>
							<FormControl>
								<Input placeholder="Enter an ICAO" {...field} />
							</FormControl>
							<FormDescription>

							</FormDescription>
							<FormMessage />
						</FormItem>

					)}
				/>
				<FormField
					control={form.control}
					name="equipment"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Equipment</FormLabel>

							<Popover>
								<PopoverTrigger className="w-fit">
									<FormControl>
										<Button
											variant="outline"
											role="combobox"
											className={cn(
												"w-fit",
												!field.value && "text-muted-foreground"
											)}
										>
											{field.value
												? equipment.find(
													(equipment) => equipment === field.value
												)
												: "Select an aircraft"}
											<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-[200px] p-0">
									<Command>
										<CommandGroup>
											{equipment.map((equipment) => (
												<CommandItem
													value={equipment}
													key={equipment}
													onSelect={() => {
														form.setValue("equipment", equipment);
													}}
												>
													<Check
														className={cn(
															"mr-2 h-4 w-4",
															equipment === field.value
																? "opacity-100"
																: "opacity-0"
														)}
													/>
													{equipment}
												</CommandItem>
											))}
										</CommandGroup>
									</Command>
								</PopoverContent>
							</Popover>


							<FormDescription>

							</FormDescription>
							<FormMessage />
						</FormItem>

					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}