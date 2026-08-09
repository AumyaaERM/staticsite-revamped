import React from 'react';
import { Check } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const PLANS: Plan[] = [
  {
    name: 'Enterprise',
    price: 'Rs 0',
    priceNote: '/forever',
    features: ['Latest news & simple summaries', 'Universal search', 'Limited AI summaries'],
    cta: 'Start Free →',
  },
  {
    name: 'REGISTERED',
    price: 'Rs 0',
    priceNote: '/sign-up required',
    features: ['Everything in Free', 'AI Chat access', 'Downloads & bookmarks', 'Newsletters'],
    cta: 'Register →',
  },
  {
    name: 'PREMIUM',
    price: 'Rs 4999',
    priceNote: '/per month',
    features: [
      'Unlimited AI Chat & checklists',
      'Policy Generator, Gap Assessment',
      'Circular comparator',
      'Excel / PPT / Board note exports',
    ],
    cta: 'Choose this plan →',
    highlighted: true,
  },
  {
    name: 'ENTERPRISE',
    price: 'Custom',
    priceNote: '/talk to us',
    features: [
      'Custom AI on private knowledge base',
      "Company policies & internal circulars",
      'Compliance dashboard',
      'API integrations',
    ],
    cta: 'Contact Sales →',
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-10 py-14 md:py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-2">
        Plans for every stage of compliance
      </h2>
      <p className="text-gray-500 text-center text-sm sm:text-base mb-10">
        Start free. Upgrade when you need AI at scale.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto items-start">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-6 flex flex-col ${
              plan.highlighted
                ? 'bg-black text-white shadow-xl lg:scale-105 lg:-translate-y-2'
                : 'bg-white text-black border border-gray-200'
            }`}
          >
            <h3 className={`text-lg font-bold mb-3 ${plan.highlighted ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
            <p className="mb-5">
              <span className="text-2xl font-bold">{plan.price}</span>
              <span className={`text-xs ml-1 ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>{plan.priceNote}</span>
            </p>

            <ul className="space-y-2.5 mb-6 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-[#FCD421]' : 'text-gray-400'}`} />
                  <span className={plan.highlighted ? 'text-gray-200' : 'text-gray-700'}>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`text-sm font-semibold px-4 py-2.5 rounded-full transition-all ${
                plan.highlighted ? 'bg-[#FCD421] text-black' : 'bg-[#FDE68A] text-black'
              } hover:brightness-95`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
