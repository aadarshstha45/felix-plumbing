import {
  Box,
  Card,
  Container,
  Field,
  Flex,
  GridItem,
  Icon,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Clock } from "@phosphor-icons/react";
import { Button } from "@plumbing/components/ui/button";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@plumbing/components/ui/native-select";
import { toaster } from "@plumbing/components/ui/toaster";
import { contactData } from "@plumbing/layouts/data";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const MAIL_URL = import.meta.env.VITE_MAIL_URL;

type InputFormField = {
  label: string;
  placeholder: string;
  type: "text" | "email" | "select" | "textarea";
  name:
    | "firstName"
    | "lastName"
    | "email"
    | "phone"
    | "zipCode"
    | "service"
    | "message";
  options?: { value: string; label: string }[];
};

const inputForm: InputFormField[] = [
  {
    label: "First Name",
    placeholder: "First Name",
    type: "text",
    name: "firstName",
  },
  {
    label: "Last Name",
    placeholder: "Last Name",
    type: "text",
    name: "lastName",
  },
  {
    label: "Email",
    placeholder: "Email",
    type: "email",
    name: "email",
  },
  {
    label: "Phone",
    placeholder: "Phone",
    type: "text",
    name: "phone",
  },
  {
    label: "Zip Code",
    placeholder: "Zip Code",
    type: "text",
    name: "zipCode",
  },
  {
    label: "Service",
    placeholder: "Select Service",
    type: "select",
    options: [
      { value: "Gas Line", label: "Gas Line" },
      { value: "Water Heater", label: "Water Heater" },
      { value: "Drain Service", label: "Drain Service" },
    ],
    name: "service",
  },
  {
    label: "Message",
    placeholder: "Message",
    type: "textarea",
    name: "message",
  },
];

const appointMentDetails = [
  ...contactData,
  {
    label: "Business Hours",
    description: "",
    value: ["Monday - Friday: 7am - 5pm", "Saturday: By Appointment"],
    icon: <Clock />,
    link: "#",
  },
];

const RequestAppointment = () => {
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    service: "",
    message: "",
  };

  const { register, handleSubmit, reset } = useForm({ defaultValues });
  const [loading, setLoading] = useState(false);
  const receiverEmail = appointMentDetails.find(
    (item) => item.label === "Email"
  )?.value;

  const onSubmit = async (data: typeof defaultValues) => {
    setLoading(true);
    const { firstName, lastName, email, phone, zipCode, service, message } =
      data;

    const formattedData = {
      to: receiverEmail,
      subject: "Request for an Appointment",
      message: {
        Name: `${firstName} ${lastName}`,
        Email: email,
        Phone: phone,
        "Zip Code": zipCode,
        Service: service,
        Message: message,
      },
    };

    try {
      const response = await axios.post(MAIL_URL, formattedData);
      if (response.data.status) {
        toaster.create({
          title: "Success",
          description: "Your request has been submitted successfully",
          type: "success",
        });
        reset();
      }
    } catch (error) {
      console.error(error);
      toaster.create({
        title: "Error",
        description: "Something went wrong. Please try again later",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack>
      <Container maxW={"1156px"} pt={"50px"} pb={"100px"}>
        <Text textAlign={"center"} color={"#626262"} textStyle={"caption"}>
          We'd love to hear from you
        </Text>
        <Text
          textAlign={"center"}
          color={"primary.500"}
          my={"10px"}
          textStyle={"heading"}
        >
          Request an Appointment
        </Text>
        <SimpleGrid
          columns={[1, 2, 2, 3]}
          gap={10}
          mt={"20px"}
          justifyItems={"center"}
        >
          {appointMentDetails
            .filter((item) => item.label !== "Address")
            .map((item, index) => (
              <Stack key={index} align={"center"} gap={1}>
                <Flex
                  boxSize={"62px"}
                  p={"15px"}
                  align={"center"}
                  justify={"center"}
                  bg={"#F4F6F8"}
                  rounded={"50%"}
                >
                  <Icon boxSize={"32px"} asChild color={"primary.500"}>
                    {item.icon}
                  </Icon>
                </Flex>
                <Text
                  color={"#626262"}
                  fontSize={"16px"}
                  lineHeight={"26px"}
                  letterSpacing={"0.08px"}
                >
                  {item.label}
                </Text>
                <Text
                  color={"#626262"}
                  fontSize={"16px"}
                  lineHeight={"26px"}
                  letterSpacing={"0.08px"}
                  textAlign={"center"}
                >
                  {item.description}
                </Text>

                {item.value instanceof Array ? (
                  <Stack>
                    {item.value.map((value, index) => (
                      <Text
                        color={"#626262"}
                        fontSize={"16px"}
                        lineHeight={"26px"}
                        letterSpacing={"0.08px"}
                        textAlign={"center"}
                        key={index}
                      >
                        {value}
                      </Text>
                    ))}
                  </Stack>
                ) : (
                  <Text
                    color={"#626262"}
                    fontSize={"16px"}
                    lineHeight={"26px"}
                    letterSpacing={"0.08px"}
                    textAlign={"center"}
                    asChild
                  >
                    <Link
                      outline={"none"}
                      href={item.link}
                      color={"primary.500"}
                    >
                      {item.value}
                    </Link>
                  </Text>
                )}
              </Stack>
            ))}
        </SimpleGrid>
      </Container>
      <Box bg={"white"} w={"100dvw"} mx={"auto"} px={4}>
        <Card.Root
          overflow={"hidden"}
          transform={"translateY(-80px)"}
          my={"10px"}
          maxW={"1300px"}
          mx={"auto"}
          variant={"elevated"}
          boxShadow={
            "0px 40px 36px 0px rgba(0, 0, 0, 0.07), 0px 20.25px 15.69px 0px rgba(0, 0, 0, 0.05), 0px 8px 5.85px 0px rgba(0, 0, 0, 0.04), 0px 1.75px 2.08px 0px rgba(0, 0, 0, 0.02)"
          }
          borderRadius={"30px"}
        >
          <Card.Body p={0}>
            <SimpleGrid columns={{ base: 1, md: 2 }}>
              <Box w={"full"} h={{ base: "400px", md: "full" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216180.0758918717!2d-111.19432268785191!3d32.155326177376864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d665410b2ced2b%3A0x73c32d384d16c715!2sTucson%2C%20AZ%2C%20USA!5e0!3m2!1sen!2snp!4v1739811011576!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
              <Container
                maxW={"95dvw"}
                pb={{ md: 10 }}
                id="request-an-appointment"
              >
                <Stack textAlign={"center"} py={"60px"}>
                  <Text textStyle={"caption"} color={"#626262"}>
                    We're here to help
                  </Text>
                  <Text textStyle={"heading"} color={"primary.500"}>
                    Contact Us Today
                  </Text>
                  <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
                    {inputForm.map((input, index) => (
                      <GridItem
                        key={index}
                        colSpan={{
                          base: 2,
                          sm: input.type === "textarea" ? 2 : 1,
                        }}
                        asChild
                      >
                        <form
                          id="appointment-form"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          {input.type === "select" ? (
                            <Field.Root>
                              <Field.Label>{input.label}</Field.Label>
                              <NativeSelectRoot variant={"subtle"}>
                                <NativeSelectField
                                  height={"50px"}
                                  placeholder={input.placeholder}
                                  items={input.options}
                                  borderRadius={"8px"}
                                  {...register(input.name)}
                                />
                              </NativeSelectRoot>
                            </Field.Root>
                          ) : input.type === "textarea" ? (
                            <Field.Root>
                              <Field.Label>{input.label}</Field.Label>
                              <Textarea
                                variant={"subtle"}
                                minH={"180px"}
                                placeholder={input.placeholder}
                                borderRadius={"8px"}
                                className="peer"
                                resize={"none"}
                                {...register(input.name)}
                              />
                            </Field.Root>
                          ) : (
                            <Field.Root>
                              <Field.Label>{input.label}</Field.Label>
                              <Input
                                variant={"subtle"}
                                height={"50px"}
                                placeholder={input.placeholder}
                                borderRadius={"8px"}
                                className="peer"
                                type={input.type}
                                {...register(input.name)}
                              />
                            </Field.Root>
                          )}
                        </form>
                      </GridItem>
                    ))}
                  </SimpleGrid>
                  <Button
                    type="submit"
                    form="appointment-form"
                    w={"full"}
                    loading={loading}
                    loadingText={"Submitting"}
                  >
                    Submit
                  </Button>
                </Stack>
              </Container>
            </SimpleGrid>
          </Card.Body>
        </Card.Root>
      </Box>
    </Stack>
  );
};

export default RequestAppointment;
