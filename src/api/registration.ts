export type RegistrationPayload = {
  fullName: string;
  email: string;
  company: string;
  position: string;
  phone: string;
};

// const registrationsEndpoint = "https://3pgnfojbw4.execute-api.ap-southeast-1.amazonaws.com/registrations" -- real ;
const registrationsEndpoint = "https://zm0f2zb9a1.execute-api.ap-southeast-1.amazonaws.com/registrations";

export async function submitRegistration(payload: RegistrationPayload) {
  const response = await fetch(registrationsEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Registration request failed");
  }
}
