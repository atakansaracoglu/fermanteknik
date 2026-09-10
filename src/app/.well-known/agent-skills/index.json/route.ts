export function GET() {
  const skills = {
    name: "Ferman Teknik",
    skills: [
      {
        id: "get-business-info",
        name: "Get Business Info",
        description:
          "Returns business name, address, phone numbers, and service area for Ferman Teknik.",
        uri: "https://fermanteknik.com/.well-known/ai-catalog.json",
      },
      {
        id: "get-services",
        name: "Get Service List",
        description:
          "Returns the list of HVAC and appliance repair services offered.",
        uri: "https://fermanteknik.com/.well-known/ai-catalog.json",
      },
      {
        id: "get-contact",
        name: "Get Contact Info",
        description:
          "Returns phone numbers and address for contacting Ferman Teknik.",
        uri: "https://fermanteknik.com/.well-known/ai-catalog.json",
      },
    ],
  };

  return Response.json(skills);
}
