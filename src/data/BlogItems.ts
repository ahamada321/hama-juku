export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  publishedDate: string;
  content: string;
  categories: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'top-5-design-trends-2025',
    title: 'Top 5 Design Trends for 2025',
    excerpt: 'Discover the latest trends shaping the future of graphic design, from bold typography to immersive 3D elements.',
    image: '/img/blog1.jpg',
    alt: 'Top 5 Design Trends for 2025 cover image',
    publishedDate: 'June 20, 2025',
    content: `
      <p>The design landscape is ever-changing, and 2025 is set to bring bold, innovative trends that redefine creativity. At Stefan Douman Design, we’re excited to share the top five design trends that will dominate the industry, helping you stay ahead in your creative projects.</p>
      
      <h2>Why Design Trends Matter</h2>
      <p>Trends reflect evolving user preferences, technological advancements, and cultural shifts. By embracing these trends, designers can create work that’s both relevant and impactful. Here’s what’s shaping design in 2025:</p>
      
      <h3>1. Bold Maximalism</h3>
      <p>Minimalism is taking a backseat as bold maximalism surges forward. This trend embraces vibrant colors, intricate patterns, and layered compositions to create visually striking designs that demand attention.</p>
      <ul>
        <li>Experiment with clashing color palettes like lime green and deep magenta.</li>
        <li>Mix bold typography styles for dynamic layouts.</li>
        <li>Add layered textures to create depth and personality.</li>
      </ul>
      
      <h3>2. AI-Driven Design Interfaces</h3>
      <p>Artificial intelligence is revolutionizing user experiences. AI-driven interfaces adapt in real-time, offering personalized interactions through predictive algorithms and dynamic layouts.</p>
      <ol>
        <li>Add AI-powered chatbots for instant user support.</li>
        <li>Use machine learning to tailor layouts to user behavior.</li>
        <li>Incorporate voice-activated controls for enhanced accessibility.</li>
      </ol>
      
      <h3>3. 3D and Immersive Elements</h3>
      <p>Advancements in WebGL and AR/VR are making 3D elements more accessible. In 2025, expect immersive visuals like interactive 3D models and animated backgrounds that enhance storytelling.</p>
      
      <blockquote>
        “Great design doesn’t just capture the eye—it immerses the user in a story.” – Stefan Douman
      </blockquote>
      
      <h3>4. Sustainable Design Aesthetics</h3>
      <p>Sustainability is influencing aesthetics, with eco-friendly color palettes (earthy greens, ocean blues) and organic shapes. Brands are adopting these designs to align with environmental values.</p>
      
      <h3>5. Retro-Futurism</h3>
      <p>Retro-futurism blends 80s/90s nostalgia with futuristic elements, featuring neon gradients, pixelated fonts, and sci-fi-inspired layouts for a unique aesthetic.</p>
      
      <h2>Implementing These Trends</h2>
      <p>Start small by integrating one or two trends into your projects. For example, use maximalist elements in a poster design or add AI-driven features to a website. Balance creativity with your brand’s identity for authentic results.</p>
    `,
    categories: ['design', 'trends'],
  },
  {
    slug: 'mastering-ui-ux-design',
    title: 'Mastering UI/UX Design',
    excerpt: 'Learn key principles to create intuitive and visually appealing interfaces for web and mobile apps.',
    image: '/img/blog2.jpg',
    alt: 'Mastering UI/UX Design cover image',
    publishedDate: 'June 15, 2025',
    content: `
      <p>UI/UX design is at the heart of creating user-friendly digital experiences. This article explores key principles to help you craft interfaces that are both intuitive and visually appealing.</p>
      
      <h2>Understanding UI/UX</h2>
      <p>UI (User Interface) focuses on the visual elements, while UX (User Experience) ensures ease of use and satisfaction. Together, they create seamless interactions.</p>
      
      <h3>1. User-Centered Design</h3>
      <p>Always prioritize the user’s needs. Conduct user research to understand their preferences and pain points.</p>
      
      <h3>2. Consistency in Design</h3>
      <p>Maintain consistent typography, colors, and layouts to create a cohesive experience across platforms.</p>
      
      <h3>3. Usability Testing</h3>
      <p>Test your designs with real users to identify issues and improve functionality before launch.</p>
    `,
    categories: ['ui-ux', 'design'],
  },
  {
    slug: 'the-art-of-branding',
    title: 'The Art of Branding',
    excerpt: 'Uncover the secrets to building a memorable brand identity that resonates with your audience.',
    image: '/img/blog3.jpg',
    alt: 'The Art of Branding cover image',
    publishedDate: 'June 10, 2025',
    content: `
      <p>Branding is more than a logo—it’s the essence of your business. This article uncovers the secrets to creating a brand identity that resonates with your audience.</p>
      
      <h2>Key Elements of Branding</h2>
      <p>A strong brand identity includes a unique logo, consistent typography, and a cohesive color palette.</p>
      
      <h3>1. Storytelling</h3>
      <p>Craft a compelling brand story that connects emotionally with your audience.</p>
      
      <h3>2. Visual Identity</h3>
      <p>Use visuals to communicate your brand’s personality and values effectively.</p>
      
      <h3>3. Consistency Across Channels</h3>
      <p>Ensure your brand is recognizable across all platforms, from social media to print.</p>
    `,
    categories: ['branding', 'design'],
  },
  {
    slug: 'color-theory-in-design',
    title: 'Color Theory in Design',
    excerpt: 'Explore how colors influence emotions and enhance your designs with strategic color choices.',
    image: '/img/blog4.jpg',
    alt: 'Color Theory in Design cover image',
    publishedDate: 'June 5, 2025',
    content: `
      <p>Colors play a crucial role in design, influencing emotions and perceptions. This article explores how to use color theory effectively in your projects.</p>
      
      <h2>Basics of Color Theory</h2>
      <p>Understand primary, secondary, and tertiary colors, and how they interact on the color wheel.</p>
      
      <h3>1. Emotional Impact</h3>
      <p>Colors like red evoke energy, while blue promotes calm. Choose colors that align with your message.</p>
      
      <h3>2. Color Combinations</h3>
      <p>Use complementary or analogous colors to create harmonious designs.</p>
      
      <h3>3. Accessibility</h3>
      <p>Ensure sufficient contrast for readability, especially for users with visual impairments.</p>
    `,
    categories: ['design', 'color-theory'],
  },
  {
    slug: 'illustration-tips-for-beginners',
    title: 'Illustration Tips for Beginners',
    excerpt: 'Get started with digital illustration using tools like Procreate and Adobe Illustrator.',
    image: '/img/blog5.jpg',
    alt: 'Illustration Tips for Beginners cover image',
    publishedDate: 'June 1, 2025',
    content: `
      <p>Digital illustration is a powerful way to express creativity. This guide offers tips for beginners using tools like Procreate and Adobe Illustrator.</p>
      
      <h2>Getting Started with Illustration</h2>
      <p>Start with simple shapes and build complexity as you gain confidence.</p>
      
      <h3>1. Choose the Right Tools</h3>
      <p>Procreate is great for hand-drawn illustrations, while Adobe Illustrator excels in vector art.</p>
      
      <h3>2. Practice Sketching</h3>
      <p>Sketch daily to improve your skills and develop your unique style.</p>
      
      <h3>3. Use References</h3>
      <p>Study real-world objects or other artists’ work to inspire your illustrations.</p>
    `,
    categories: ['illustration', 'design'],
  },
  {
    slug: 'boosting-social-media-with-graphics',
    title: 'Boosting Social Media with Graphics',
    excerpt: 'Learn how to create engaging visuals that drive engagement on platforms like Instagram and Pinterest.',
    image: '/img/blog6.jpg',
    alt: 'Boosting Social Media with Graphics cover image',
    publishedDate: 'May 25, 2025',
    content: `
      <p>Engaging visuals are key to standing out on social media. This article shares tips for creating graphics that drive engagement on platforms like Instagram and Pinterest.</p>
      
      <h2>Why Graphics Matter</h2>
      <p>Visuals capture attention faster than text and increase shareability.</p>
      
      <h3>1. Optimize for Platforms</h3>
      <p>Tailor your graphics to each platform’s dimensions and aesthetic (e.g., square posts for Instagram).</p>
      
      <h3>2. Use Bold Colors</h3>
      <p>Bright, eye-catching colors grab attention in crowded feeds.</p>
      
      <h3>3. Incorporate Text</h3>
      <p>Add concise, bold text to convey your message quickly.</p>
    `,
    categories: ['social-media', 'design'],
  },
];