import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Mail, BarChart3 } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description:
        "Custom chatbots that handle customer inquiries, qualify leads, and provide 24/7 support with natural language processing.",
      features: [
        "Multi-platform integration",
        "Custom training",
        "Analytics dashboard",
      ],
    },
    {
      icon: Users,
      title: "Lead Capture Systems",
      description:
        "Automated lead generation and qualification systems that turn website visitors into qualified prospects.",
      features: ["Smart forms", "Lead scoring", "CRM integration"],
    },
    {
      icon: Mail,
      title: "Email & SMS Automation",
      description:
        "Personalized communication sequences that nurture leads and retain customers automatically.",
      features: ["Behavioral triggers", "A/B testing", "Performance tracking"],
    },
    {
      icon: BarChart3,
      title: "Custom Solutions",
      description:
        "Tailored automation systems built specifically for your business needs, from workflow optimization to custom integrations.",
      features: [
        "Bespoke development",
        "Unique requirements",
        "Scalable architecture",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-50/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Services That Scale Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From simple automations to complex AI systems, I build solutions
            that grow with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-base"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
