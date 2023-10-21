'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const testimonials = [
  {
    name: 'Mike Dylan',
    avatar: 'D',
    title: 'Software Developer',
    description: 'The best AI toll for developers.',
  },
  {
    name: 'Alice Mueller',
    avatar: 'A',
    title: 'Designer',
    description: 'Generates the image you are looking for in seconds.',
  },
  {
    name: 'Bob Smith',
    avatar: 'B',
    title: 'Student',
    description: 'It make writing essay fun.',
  },
  {
    name: 'Sonia Baker',
    avatar: 'S',
    title: 'Marketing Manager',
    description:
      'Generate your content, add images, audio or video with a single click.',
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-4xl font-extrabold text-white text-center mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-e lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
