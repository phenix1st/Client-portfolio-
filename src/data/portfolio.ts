export interface Project {
  id: string;
  title: string;
  category: string;
  duration: string;
  aspectRatio: '9:16' | '16:9';
  client: string;
  tools: string[];
  thumbnail: string;
  instagramUrl: string;
  embedId: string;
}

export const INSTAGRAM_REELS: Project[] = [
  {
    id: 'reel-1',
    title: 'أسهل طريقة تنقل الصور والملفات من الهاتف للـ PC',
    category: 'Tech & Productivity',
    duration: '0:32',
    aspectRatio: '9:16',
    client: 'Tech Content',
    tools: ['Premiere Pro', 'After Effects'],
    thumbnail: '/thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DeFc0ZtocF3/',
    embedId: 'DeFc0ZtocF3'
  },
  {
    id: 'reel-study',
    title: 'أفضل المواقع لي يحتاجوهم الطلبة الجامعيين',
    category: 'Viral Edutainment',
    duration: '0:38',
    aspectRatio: '9:16',
    client: 'Educational Content',
    tools: ['Premiere Pro', 'After Effects'],
    thumbnail: '/thumb-study.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DdpJwIINUbo/',
    embedId: 'DdpJwIINUbo'
  },
  {
    id: 'reel-jitter',
    title: 'Animation في دقيقة | موقع Jitter للموشن جرافيك',
    category: 'Motion & Animation',
    duration: '0:30',
    aspectRatio: '9:16',
    client: 'Design & Motion Tutorial',
    tools: ['After Effects', 'Jitter', 'Premiere Pro'],
    thumbnail: '/thumb-jitter.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DdZvTyvNZFZ/',
    embedId: 'DdZvTyvNZFZ'
  },
  {
    id: 'reel-chatgpt',
    title: 'اختصارات ChatGPT للطلبة | AI Productivity Hooks',
    category: 'AI & Productivity',
    duration: '0:45',
    aspectRatio: '9:16',
    client: 'Tech & Student Hacks',
    tools: ['Premiere Pro', 'Photoshop', 'Audition'],
    thumbnail: '/thumb-lacoste.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DdCnfmjN73K/',
    embedId: 'DdCnfmjN73K'
  },
  {
    id: 'reel-ai-tools',
    title: 'تحكم بكامل حساباتك في السوشل ميديا بالذكاء الاصطناعي',
    category: 'Social Media & AI',
    duration: '0:35',
    aspectRatio: '9:16',
    client: 'Creator Productivity',
    tools: ['Premiere Pro', 'After Effects'],
    thumbnail: '/thumb-claude.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DcuAzK7NvBM/',
    embedId: 'DcuAzK7NvBM'
  },
  {
    id: 'reel-gym',
    title: 'تحدي تصوير فيديو لقاعة Black Gym بالهاتف فقط',
    category: 'Fitness & Commercial',
    duration: '0:34',
    aspectRatio: '9:16',
    client: 'Black Gym Promo',
    tools: ['Premiere Pro', 'After Effects', 'Mobile Shot'],
    thumbnail: '/thumb-gym.jpg',
    instagramUrl: 'https://www.instagram.com/reel/Db_iAlYNVMz/',
    embedId: 'Db_iAlYNVMz'
  }
];

export const FRAMEWORK_STEPS = [
  {
    step: '01',
    title: 'Hook & Pacing Strategy',
    tagline: 'First 3 Seconds Are Everything',
    description: 'We audit raw footage and sculpt a hypnotic hook using audio triggers, dynamic zoom-ins, and visual curiosity gaps to drop early swipe-away rates below 10%.',
    deliverables: ['Retention-first script timing', 'Pattern interrupts', 'Drop-off prevention map']
  },
  {
    step: '02',
    title: 'The Rough Cut & Dynamic Pacing',
    tagline: 'Zero Dead Air, Pure Momentum',
    description: 'Aggressive trim of breaths, pauses, and filler syllables. Every visual change occurs on the beat or cadence, preserving maximum cognitive stimulation without cognitive overload.',
    deliverables: ['Beat-locked rhythm', 'J & L cuts', 'Speed ramp transitions']
  },
  {
    step: '03',
    title: 'Sound Design & Foley Mastery',
    tagline: '70% of the Experience is Audio',
    description: 'Multi-layered acoustic landscape: whooshes, cinematic risers, heavy sub-drops, tactile UI clicks, and ambient stereo spatialization that locks ear attention.',
    deliverables: ['Custom SFX library stack', 'Frequency sidechaining', 'Binaural panning']
  },
  {
    step: '04',
    title: 'VFX, Motion Graphics & Captions',
    tagline: 'Eye-Candy That Amplifies Meaning',
    description: 'Kinetic typography with glowing highlights, masking transitions, custom 3D callouts, paper-rip overlays, and viral subtitle styling tailored to your personal brand identity.',
    deliverables: ['Brand typography kit', '3D camera tracker graphics', 'Seamless rotoscoping']
  },
  {
    step: '05',
    title: 'Color Grading & Final Polish',
    tagline: 'The Signature Film Studio Look',
    description: 'Transforming flat log footage into high-contrast, moody, filmic masterpieces with skin-tone protection, film grain emulations, and 4K bitrate optimizations for Instagram & TikTok compression algorithms.',
    deliverables: ['Color LUT matching', 'Halation & grain pass', 'Optimized compression bitrates']
  }
];

export const TECH_STACK = [
  { name: 'Adobe Premiere Pro', category: 'NLE Core', color: '#9999FF', level: 'Master' },
  { name: 'After Effects', category: 'Motion & VFX', color: '#9999FF', level: 'Expert' },
  { name: 'DaVinci Resolve Studio', category: 'Color & Grading', color: '#FF7043', level: 'Master' },
  { name: 'CapCut Pro Desktop', category: 'High-Pacing Reels', color: '#00E5FF', level: 'Elite' },
  { name: 'Adobe Audition', category: 'Audio Engineering', color: '#00E676', level: 'Pro' },
  { name: 'Photoshop', category: 'Thumbnails & Assets', color: '#31A8FF', level: 'Master' },
  { name: 'Boris FX Mocha', category: 'Planar Tracking', color: '#E040FB', level: 'Pro' }
];
