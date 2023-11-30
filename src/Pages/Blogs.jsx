import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Blog = ({ title, content, imageSrc }) => (
  <Paper className="flex flex-col-reverse md:flex-row justify-between md:gap-16 my-3 md:my-6 border py-6 md:py-12 rounded px-7">
    <div className="flex-1">
      <Typography variant="h4" className="text-3xl font-semibold">
        {title}
      </Typography>
      <div className="mt-5 flex-col flex gap-5">
        {content.map((paragraph, index) => (
          <Typography key={index} component="p">
            {paragraph}
          </Typography>
        ))}
      </div>
    </div>
    <div>
      <img className="w-96 h-96" src={imageSrc} alt="" />
    </div>
  </Paper>
);

const Blogs = () => {
  const blogs = [
    {
      title: 'Understanding the Importance of Vaccination in Disease Prevention',
      content: [
        'Vaccination plays a crucial role in preventing the spread of infectious diseases. It involves administering weakened or inactivated pathogens to stimulate the immune system. This results in the production of antibodies, providing immunity and protection against future infections.',
        'Types of Vaccines: Vaccines come in various types, including live attenuated, inactivated, subunit, and mRNA vaccines. Each type has its unique mechanism and applications in preventing specific diseases.',
        'Impact on Public Health: The widespread adoption of vaccination has led to the eradication or significant reduction of several deadly diseases, contributing to overall improvements in public health.',
      ],
      imageSrc:
        'https://img.freepik.com/free-vector/drawn-coronavirus-vaccine-background_23-2148822064.jpg?w=740&t=st=1701325799~exp=1701326399~hmac=0f3bd67d145eb7a9bb39a30fcfcf6512f1065633f344cc42efa31d5e399e7435',
    },
    {
      title: 'The Role of Nutritional Habits in Maintaining a Healthy Heart',
      content: [
        'Heart Health: Adopting a nutritious diet is essential for maintaining cardiovascular health. Incorporating foods rich in omega-3 fatty acids, antioxidants, and fiber contributes to lower cholesterol levels and supports overall heart function.',
        'Nutrient-Rich Choices: Include a variety of fruits, vegetables, whole grains, and lean proteins in your daily meals. Limiting the intake of saturated fats, sodium, and added sugars further promotes heart well-being.',
        'Lifestyle Factors: In addition to a balanced diet, regular physical activity, stress management, and avoiding tobacco play crucial roles in maintaining a healthy heart and preventing cardiovascular diseases.',
      ],
      imageSrc:
        'https://img.freepik.com/free-vector/world-health-day_24908-56241.jpg?w=740&t=st=1701325876~exp=1701326476~hmac=0058052b8e5c878c9e09fb340c1c1bcb0174fb40cfbde48d64c03e4a2336c5ab',
    },
    {
      title: 'The Impact of Sleep on Mental Health and Overall Well-Being',
      content: [
        'Sleep Quality: Adequate and quality sleep is crucial for mental health. It allows the brain to consolidate memories, regulate emotions, and restore energy levels. Chronic sleep deprivation can contribute to various mental health disorders.',
        'Tips for Better Sleep: Establishing a consistent sleep schedule, creating a comfortable sleep environment, and practicing relaxation techniques can improve sleep quality. Limiting screen time before bedtime and avoiding stimulants contribute to a restful night\'s sleep.',
        'Connection to Overall Well-Being: Prioritizing sleep is integral to overall well-being. It influences cognitive function, emotional resilience, and the body\'s ability to recover from daily stressors.',
      ],
      imageSrc:
        'https://img.freepik.com/free-vector/insomnia-concept_23-2148676704.jpg?w=740&t=st=1701325962~exp=1701326562~hmac=a89fbf92758bf141491bd10ccae1e307a7b3e1f9279206d06e6ed8d446698ba0s',
    },
  ];

  return (
    <Container className="mx-4">
      {blogs.map((blog, index) => (
        <Blog key={index} {...blog} />
      ))}
    </Container>
  );
};

export default Blogs;
