export type Category = 'general' | 'subscription' | 'installation' | 'compatibility'

export interface FAQ {
  id: number
  question: string
  answer: string[]
}

export interface FAQCategory {
  id: Category
  title: string
  icon: string
  faqs: FAQ[]
}

export const faqData: FAQCategory[] = [
  {
    id: 'general',
    title: 'General Questions',
    icon: 'info',
    faqs: [
      {
        id: 1,
        question: 'Do you have plans to add more widgets in the future?',
        answer: [
          'Yes, we are continuously working on expanding our widget library to meet the evolving needs of our users. Our development team regularly evaluates user feedback and industry trends to identify valuable additions.',
          'The <strong>line color style</strong> will help you to highlight the content in the accordion. It will also enable you to create a difference between the content of the accordion and the general content. Line color style of our widget will bring <strong>elegance along with simplicity</strong> in your web page.',
          'We typically release new widgets and features on a quarterly basis. Stay tuned to our updates section for announcements about upcoming releases.',
        ],
      },
      {
        id: 2,
        question: 'Do you offer free widgets?',
        answer: [
          'Yes, we offer a selection of free widgets that provide essential functionality for your website. Our free plan includes:',
          '<ul><li>Access to <strong>core widget collection</strong></li><li>Basic customization options</li><li>Community support</li><li>Regular security updates</li></ul>',
          'For advanced features, premium styling options, and priority support, you can upgrade to one of our paid subscription plans at any time.',
        ],
      },
      {
        id: 3,
        question: 'How long will you be providing support and updates?',
        answer: [
          'We are committed to providing long-term support and regular updates for all our products. As long as you maintain an active subscription, you will receive:',
          '<ul><li><strong>Security updates</strong> and bug fixes</li><li><strong>Compatibility updates</strong> for new platform versions</li><li><strong>Feature enhancements</strong> and improvements</li><li><strong>Technical support</strong> via email and chat</li><li>Access to <strong>documentation</strong> and knowledge base</li></ul>',
          'The line color style will help you to highlight the content in the accordion. It will also enable you to create a difference between the content of the accordion and the general content. Line color style of our widget will bring elegance along with simplicity in your web page.',
          'Our support team is available during business hours, and we typically respond to inquiries within 24 hours.',
        ],
      },
    ],
  },
  {
    id: 'subscription',
    title: 'Subscription & Billing',
    icon: 'credit-card',
    faqs: [
      {
        id: 4,
        question: 'What happens when my subscription expires?',
        answer: [
          'When your subscription expires, the following changes will take effect:',
          '<ul><li>Access to <strong>premium widgets and features</strong> will be disabled</li><li>You will retain access to <strong>free widgets</strong> and basic functionality</li><li>Your customization settings and configurations will be <strong>saved</strong></li><li>You can <strong>reactivate</strong> your subscription at any time to restore full access</li><li>All your data and content will remain <strong>secure and intact</strong></li></ul>',
          'The line color style will help you to highlight the content in the accordion. It will also enable you to create a difference between the content of the accordion and the general content. Line color style of our widget will bring elegance along with simplicity in your web page.',
          'We recommend renewing your subscription before it expires to avoid any interruption in service. You will receive reminder emails prior to your expiration date.',
        ],
      },
    ],
  },
  {
    id: 'installation',
    title: 'Installation & Setup',
    icon: 'layers',
    faqs: [
      {
        id: 5,
        question: 'How to install Elementor Page Builder?',
        answer: [
          'Installing Elementor Page Builder is straightforward and can be completed in just a few steps:',
          '<ul><li>Log in to your <strong>WordPress admin dashboard</strong></li><li>Navigate to <strong>Plugins → Add New</strong></li><li>Search for <strong>"Elementor"</strong> in the search bar</li><li>Click <strong>"Install Now"</strong> on the Elementor plugin</li><li>Once installed, click <strong>"Activate"</strong> to enable the plugin</li><li>Complete the quick <strong>setup wizard</strong> to configure basic settings</li></ul>',
          'The line color style will help you to highlight the content in the accordion. It will also enable you to create a difference between the content of the accordion and the general content. Line color style of our widget will bring elegance along with simplicity in your web page.',
          'After activation, you can start building pages by editing any page or post and clicking the "Edit with Elementor" button. The drag-and-drop interface makes it easy to create professional layouts without coding.',
        ],
      },
    ],
  },
  {
    id: 'compatibility',
    title: 'Compatibility',
    icon: 'settings',
    faqs: [
      {
        id: 6,
        question: 'Does it work with any WordPress theme?',
        answer: [
          'Yes, our widgets are designed to work seamlessly with <strong>any WordPress theme</strong>. We follow WordPress coding standards and best practices to ensure maximum compatibility.',
          'The line color style will help you to highlight the content in the accordion. It will also enable you to create a difference between the content of the accordion and the general content. Line color style of our widget will bring elegance along with simplicity in your web page.',
          'Our widgets are compatible with:',
          '<ul><li><strong>All major WordPress themes</strong> (Astra, GeneratePress, OceanWP, etc.)</li><li><strong>Page builders</strong> like Elementor, Beaver Builder, and Divi</li><li><strong>WooCommerce</strong> and e-commerce themes</li><li><strong>Custom themes</strong> built following WordPress standards</li><li>Both <strong>free and premium</strong> themes</li></ul>',
          'If you encounter any compatibility issues with your specific theme, our support team is available to help troubleshoot and provide solutions. We regularly test our widgets with popular themes to ensure smooth integration.',
        ],
      },
    ],
  },
]

export const categoryInfo: Record<Category, { title: string; icon: string }> = {
  general: { title: 'General', icon: 'info' },
  subscription: { title: 'Subscription', icon: 'credit-card' },
  installation: { title: 'Installation', icon: 'layers' },
  compatibility: { title: 'Compatibility', icon: 'settings' },
}
