import { PlaceHolderImages } from './placeholder-images';
import type { Course, Review, Video, CourseCategory, Testimonial, Article } from './types';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id ${id} not found`);
  }
  return image;
};

export const courses: Course[] = [
  {
    id: 'frontend-mastery',
    title: 'Frontend Mastery 2024',
    description: 'A comprehensive course on modern frontend development with React and Next.js.',
    image: getImage('course-frontend'),
    category: 'Frontend',
    url: '#',
  },
  {
    id: 'python-for-everyone',
    title: 'Python for Everyone',
    description: 'From zero to hero in Python. Learn the fundamentals and build real-world projects.',
    image: getImage('course-python'),
    category: 'Python',
    url: '#',
  },
  {
    id: 'ai-fundamentals',
    title: 'AI Fundamentals',
    description: 'An introduction to the world of Artificial Intelligence and Machine Learning.',
    image: getImage('course-ai'),
    category: 'AI',
    url: '#',
  },
  {
    id: 'dev-tools-unleashed',
    title: 'Dev Tools Unleashed',
    description: 'Master the tools that will make you a more productive developer.',
    image: getImage('course-tools'),
    category: 'Tools',
    url: '#',
  },
];

export const videos: Video[] = [
  {
    id: 'vid1',
    title: 'Building a SaaS with Next.js in 24 Hours',
    thumbnail: getImage('video-1'),
    url: 'https://www.youtube.com/watch?v=DF_25h7-a3o',
  },
  {
    id: 'vid2',
    title: 'My Top 5 VS Code Extensions for 2024',
    thumbnail: getImage('video-2'),
    url: 'https://www.youtube.com/watch?v=0_nF3-voZ-E',
  },
  {
    id: 'vid3',
    title: 'Python Automation Scripts to Save You Time',
    thumbnail: getImage('video-3'),
    url: 'https://www.youtube.com/watch?v=k-4p9-gKjQI',
  },
  {
    id: 'vid4',
    title: 'Is This The Best CSS Framework? A Deep Dive',
    thumbnail: getImage('video-4'),
    url: 'https://www.youtube.com/watch?v=i_LwzRVP24E',
  },
];

export const playlistVideos: Video[] = [
  {
    id: 'vid1',
    title: 'Building a SaaS with Next.js in 24 Hours',
    thumbnail: getImage('video-1'),
    url: 'https://www.youtube.com/watch?v=DF_25h7-a3o',
  },
  {
    id: 'vid-learn',
    title: 'ملخص أهم كورس حضرته في حياتي : تعلم كيف تتعلم!',
    thumbnail: getImage('playlist-learn'),
    url: 'https://www.youtube.com/watch?v=Z8trnAEi27k',
  },
  {
    id: 'vid-study',
    title: 'كيف تذاكر أقل و تذاكر بذكاء ؟',
    thumbnail: getImage('playlist-study'),
    url: 'https://www.youtube.com/watch?v=Ac-50q_GgBw',
  },
  {
    id: 'vid-focus',
    title: '5 نصائح للتركيز المطلق أثناء المذاكرة',
    thumbnail: getImage('playlist-focus'),
    url: 'https://www.youtube.com/watch?v=P9p7T28I9iE',
  },
   {
    id: 'vid-present-simple',
    title: 'شرح زمن المضارع البسيط Present Simple',
    thumbnail: getImage('playlist-present-simple'),
    url: 'https://www.youtube.com/watch?v=pWa-2uURC_Q',
  },
  {
    id: 'vid-premiere',
    title: 'تعلم المونتاج ببرنامج بريمير Premiere في أقل من ساعه',
    thumbnail: getImage('playlist-premiere'),
    url: 'https://www.youtube.com/watch?v=zCFSyY_tqes',
  },
];

export const reviews: Review[] = [
  {
    id: 'figma-review',
    title: 'Figma',
    description: 'The collaborative interface design tool. A must-have for UI/UX designers.',
    rating: 5,
    pros: ['Collaborative', 'Easy to use', 'Powerful features'],
    cons: ['Can be slow with large files'],
    image: getImage('review-figma'),
    videoUrl: 'https://www.youtube.com/@yehia-official',
  },
  {
    id: 'vscode-review',
    title: 'VS Code',
    description: 'A powerful, free code editor that has become the industry standard.',
    rating: 5,
    pros: ['Free and open source', 'Huge extension marketplace', 'Highly customizable'],
    cons: ['Can be resource-intensive'],
    image: getImage('review-vscode'),
  },
  {
    id: 'notion-review',
    title: 'Notion',
    description: 'The all-in-one workspace for your notes, tasks, wikis, and databases.',
    rating: 4,
    pros: ['All-in-one workspace', 'Flexible and powerful', 'Great for documentation'],
    cons: ['Mobile app needs improvement', 'Can be complex to set up'],
    image: getImage('review-notion'),
    videoUrl: 'https://www.youtube.com/@yehia-official',
  },
  {
    id: 'github-review',
    title: 'GitHub Copilot',
    description: 'Your AI pair programmer that helps you write better code, faster.',
    rating: 4,
    pros: ['Speeds up development', 'Great code suggestions', 'Integrates well with VS Code'],
    cons: ['Not always accurate', 'Subscription cost'],
    image: getImage('review-github'),
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    rating: 5,
    summary: 'Amazing content!',
    author: {
      name: 'Hoor Hesham',
      title: 'Software Engineer',
      image: getImage('testimonial-1'),
    },
  },
  {
    id: 'testimonial-2',
    rating: 5,
    summary: 'Boosted my career!',
    author: {
      name: 'Ahmed Yasser',
      title: 'Frontend Developer',
      image: getImage('testimonial-2'),
    },
  },
  {
    id: 'testimonial-3',
    rating: 5,
    summary: 'Easy to understand!',
    author: {
      name: 'Fatma Mohamed',
      title: 'UI/UX Designer',
      image: getImage('testimonial-3'),
    },
  },
  {
    id: 'testimonial-4',
    rating: 5,
    summary: 'Best tech content creator.',
    author: {
      name: 'Khaled Ali',
      title: 'Student',
      image: getImage('testimonial-4'),
    },
  },
  {
    id: 'testimonial-5',
    rating: 5,
    summary: 'Finally understood React!',
    author: {
      name: 'Sara Ibrahim',
      title: 'Junior Developer',
      image: getImage('testimonial-5'),
    },
  },
];

export const articles: Article[] = [
    {
      id: 'success-secrets',
      title: 'أسرار النجاح ال 10 – كيف تنجح في خطوات سريعة',
      description: 'تستيقظ البشرية كل يوم وتبدأ في العمل وتتنافس فيما بينها على النجاح في جميع جوانب الحياة، ولكن',
      content: 'النجاح ليس وجهة، بل رحلة مستمرة من التطور والتعلم. في هذا المقال، نستكشف عشرة أسرار أساسية يمكن أن تضعك على طريق النجاح. من تحديد الأهداف الواضحة إلى بناء العادات الإيجابية، كل سر هو خطوة نحو تحقيق إمكاناتك الكاملة. سنتعمق في أهمية الانضباط الذاتي، وقوة التفكير الإيجابي، وكيفية تحويل الفشل إلى فرصة للنمو. انضم إلينا في هذه الرحلة لاكتشاف كيف يمكنك تحقيق النجاح في حياتك الشخصية والمهنية بخطوات سريعة ومدروسة.',
      image: getImage('blog-success-secrets'),
      url: '/blog/success-secrets',
    },
    {
      id: 'emotional-intelligence',
      title: 'الذكاء العاطفي – طريقة تنمية الذكاء العاطفي وأهميته',
      description: 'نحن نلاحظ دوماً أنه يوجد بعض الناس من حولنا يستطيعون التحكم في مشاعرهم بطريقة كبيرة جداً، ويتمتعون',
      content: 'الذكاء العاطفي هو القدرة على فهم واستخدام وإدارة عواطفك بطرق إيجابية لتخفيف التوتر، والتواصل بفعالية، والتعاطف مع الآخرين، والتغلب على التحديات، ونزع فتيل الصراع. يوضح هذا المقال أهمية الذكاء العاطفي في جميع جوانب الحياة، من العلاقات الشخصية إلى النجاح المهني. سنقدم لك استراتيجيات عملية لتنمية ذكائك العاطفي، بما في ذلك تقنيات الوعي الذاتي، وتنظيم المشاعر، وتطوير المهارات الاجتماعية.',
      image: getImage('blog-emotional-intelligence'),
      url: '/blog/emotional-intelligence',
    },
    {
      id: 'personal-success',
      title: 'أهمية النجاح – كيف تنجح في حياتك الشخصية والعملية؟',
      description: 'مع الانتشار الكبير لمواقع التواصل الاجتماعي أصبح أغلب الناس ينشرون نجاحاتهم ويستعرضون إنجازاتهم، وأصبح أغلب الشباب يدركون',
      content: 'النجاح الشخصي والمهني هدف يسعى إليه الجميع. لكن كيف يمكن تحقيقه؟ هذا المقال يغوص في العوامل الرئيسية التي تساهم في تحقيق النجاح. من تحديد رؤيتك الشخصية ووضع أهداف متوافقة معها، إلى تطوير المهارات اللازمة والمثابرة في مواجهة الصعوبات. سنناقش كيف يمكن للتوازن بين الحياة الشخصية والعملية أن يكون محركًا للنجاح المستدام، وكيف يمكن بناء شبكة علاقات داعمة أن يفتح لك أبوابًا جديدة للفرص.',
      image: getImage('blog-personal-success'),
      url: '/blog/personal-success',
    },
    {
      id: 'time-management',
      title: 'فن إدارة الوقت: كيف تسيطر على يومك؟',
      description: 'تعلم تقنيات فعالة لإدارة وقتك وزيادة إنتاجيتك بشكل ملحوظ.',
      content: 'الوقت هو أثمن مورد لدينا، وإدارته بفعالية هي مفتاح الإنتاجية وتقليل التوتر. في هذا المقال، نستعرض تقنيات مجربة لإدارة الوقت مثل مصفوفة أيزنهاور، وتقنية الطماطم (بومودورو)، وقاعدة الدقيقتين. ستتعلم كيف تحدد أولوياتك، وتتغلب على المماطلة، وتخلق نظامًا يناسب أسلوب حياتك. السيطرة على يومك تبدأ من السيطرة على وقتك، وهذا الدليل سيوضح لك كيف تفعل ذلك خطوة بخطوة.',
      image: getImage('blog-time-management'),
      url: '/blog/time-management',
    },
    {
      id: 'freelancing-guide',
      title: 'دليلك الكامل لبدء العمل الحر عبر الإنترنت',
      description: 'خطوات عملية ونصائح ذهبية للانطلاق في عالم العمل الحر وتحقيق الاستقلال المالي.',
      content: 'هل تحلم بالعمل لنفسك وتحديد ساعات عملك الخاصة؟ العمل الحر عبر الإنترنت يمكن أن يكون الحل. هذا الدليل الشامل يأخذك في رحلة من فكرة إلى إطلاق عملك الحر بنجاح. سنتناول كيفية تحديد خدماتك، وبناء معرض أعمال (بورتفوليو) قوي، وإيجاد العملاء الأوائل، وتحديد أسعارك. بالإضافة إلى ذلك، سنقدم نصائح حول إدارة أموالك والتعامل مع التحديات الشائعة التي يواجهها المستقلون.',
      image: getImage('blog-freelancing-guide'),
      url: '/blog/freelancing-guide',
    },
    {
      id: 'learn-programming',
      title: 'كيف تبدأ في تعلم البرمجة من الصفر؟',
      description: 'خارطة طريق واضحة للمبتدئين لاختيار اللغة المناسبة ومصادر التعلم الفعالة.',
      content: 'دخول عالم البرمجة قد يبدو مخيفًا في البداية، لكن مع خارطة الطريق الصحيحة، يمكن لأي شخص أن يصبح مبرمجًا. يرشدك هذا المقال خلال الخطوات الأولى، بدءًا من فهم أساسيات علوم الكمبيوتر، واختيار لغة البرمجة الأولى المناسبة لأهدافك (مثل بايثون للمبتدئين أو جافاسكريبت لتطوير الويب). سنستعرض أفضل المصادر المجانية والمدفوعة للتعلم، وأهمية بناء المشاريع العملية لترسيخ معرفتك.',
      image: getImage('blog-learn-programming'),
      url: '/blog/learn-programming',
    },
    {
      id: 'digital-marketing',
      title: 'أساسيات التسويق الرقمي لمشروعك الناشئ',
      description: 'اكتشف أهم قنوات التسويق الرقمي وكيفية استخدامها للوصول إلى عملائك.',
      content: 'في العصر الرقمي، لا يمكن لأي مشروع ناشئ أن ينجح بدون استراتيجية تسويق رقمي قوية. يقدم هذا المقال نظرة عامة على الأساسيات، بما في ذلك تحسين محركات البحث (SEO)، والتسويق عبر وسائل التواصل الاجتماعي، والتسويق عبر البريد الإلكتر الإلكتروني، والإعلانات المدفوعة. ستفهم كيفية تحديد جمهورك المستهدف، وإنشاء محتوى جذاب، وقياس نتائج حملاتك التسويقية لتحقيق أفضل عائد على الاستثمار.',
      image: getImage('blog-digital-marketing'),
      url: '/blog/digital-marketing',
    },
    {
      id: 'public-speaking',
      title: 'تغلب على الخوف من التحدث أمام الجمهور',
      description: 'نصائح مجربة لزيادة ثقتك بنفسك وتقديم عروض تقديمية مؤثرة.',
      content: 'الخوف من التحدث أمام الجمهور هو أحد أكثر المخاوف شيوعًا، لكنه مهارة يمكن تطويرها. يقدم هذا المقال نصائح عملية ومجربة للتغلب على هذا الخوف. ستتعلم كيفية التحضير بشكل جيد، وتنظيم أفكارك، واستخدام لغة الجسد لصالحك، والتعامل مع التوتر قبل وأثناء الخطاب. سواء كنت تقدم عرضًا في العمل أو تتحدث في مناسبة اجتماعية، ستساعدك هذه الاستراتيجيات على التحدث بثقة وتأثير.',
      image: getImage('blog-public-speaking'),
      url: '/blog/public-speaking',
    },
    {
      id: 'building-habits',
      title: 'علم بناء العادات: كيف تكتسب عادات إيجابية؟',
      description: 'استراتيجيات مثبتة علميًا لتكوين عادات جديدة والتخلص من العادات السلبية.',
      content: 'العادات هي التي تشكل حياتنا اليومية، وبناء عادات إيجابية هو أساس التطور الشخصي. بالاعتماد على أبحاث علم النفس السلوكي، يشرح هذا المقال كيف تتشكل العادات وكيف يمكنك تصميمها بشكل متعمد. سنتحدث عن "حلقة العادة" (الإشارة، الروتين، المكافأة) وكيفية استخدامها لبناء عادات جديدة مثل ممارسة الرياضة بانتظام أو القراءة يوميًا، والتخلص من العادات السلبية.',
      image: getImage('blog-building-habits'),
      url: '/blog/building-habits',
    },
    {
      id: 'investing-basics',
      title: 'مبادئ الاستثمار للمبتدئين: من أين تبدأ؟',
      description: 'دليلك المبسط لفهم أساسيات الاستثمار وكيفية بناء محفظتك المالية الأولى.',
      content: 'الاستثمار هو أداة قوية لبناء الثروة على المدى الطويل، ولكنه قد يبدو معقدًا للمبتدئين. يبسط هذا الدليل المفاهيم الأساسية، مثل الفرق بين الأسهم والسندات، وأهمية التنويع، وقوة الفائدة المركبة. سنرشدك خلال خطواتك الأولى، من تحديد أهدافك المالية وتحملك للمخاطر، إلى فتح حساب استثماري وبناء محفظتك الأولى. ابدأ رحلتك نحو الاستقلال المالي اليوم.',
      image: getImage('blog-investing-basics'),
      url: '/blog/investing-basics',
    },
  ];


export const courseCategories: CourseCategory[] = ['Frontend', 'Python', 'AI', 'Tools'];
