"use client"

import { motion } from "framer-motion"
import { 
  ArrowRight, 
  UserPlus, 
  Search, 
  Wallet, 
  MessageSquare, 
  Zap,
  Shield,
  Lock,
  Scale
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import ParticleEffect from '@/components/ParticleEffect'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const features = [
    {
      title: "Decentralized Energy Network",
      description:
        "Powered by blockchain technology, EV Power eliminates intermediaries by converting energy recovered from electric vehicle braking into power, building a completely decentralized green energy trading platform.",
    },
    {
      title: "Powerful Privacy Protection",
      description:
        "With advanced encryption technology and anonymous transactions, all user activities are protected, ensuring no personal information is ever leaked.",
    },
    {
      title: "Built-in Encrypted Communication",
      description:
        "Seamlessly connect with buyers, sellers, or service providers through the platform's encrypted chat, ensuring secure communication.",
    },
    {
      title: "SOLANA Network Integration",
      description:
        "Access the platform through the SOLANA network to ensure that your transaction data and mining activities are fully anonymous with no trace left on the internet.",
    },
    {
      title: "Low Fees, High Efficiency",
      description:
        "Using the native token EVPower, transaction fees are reduced by over 90% compared to traditional methods.",
    },
  ]

  const miningSteps = [
    {
      title: "Register an Account",
      description:
        "EV Power offers quick registration with just an anonymous wallet address required. No complicated identity verification needed.",
      icon: UserPlus,
    },
    {
      title: "Browse Devices and Services",
      description:
        "Explore the platform to find everything from electric vehicle equipment to mining devices and services to begin your mining journey.",
      icon: Search,
    },
    {
      title: "Pay with EVPower",
      description: "All transactions are completed using EVPower, ensuring fast, low-fee, and secure transactions.",
      icon: Wallet,
    },
    {
      title: "Communicate and Deliver",
      description:
        "Use encrypted chat to securely communicate with buyers, sellers, or service providers regarding the purchase and installation of devices.",
      icon: MessageSquare,
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* 背景图片 */}
          <div className="absolute inset-0">
            <Image
              src="/ev-car-bg.png" // 确保图片放在 public 目录下
              alt="EV Power Background"
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
          </div>
          
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          
          {/* 粒子效果 */}
          <ParticleEffect />
          
          {/* 绿色光效 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 1] }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent"
          />

          <div className="container px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-white to-primary-300">
                  The Future of Free Cryptocurrency Mining
                </span>
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-green-300">
                  Powered by Electric Vehicles
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300/90 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                EV Power is a revolutionary decentralized platform that utilizes regenerative braking technology in
                electric vehicles to convert braking energy into power for cryptocurrency mining. By integrating blockchain
                technology, EV Power provides users with a transparent, secure, and intermediary-free mining platform,
                allowing you to experience a new green digital economy.
              </p>
              
              <div className="flex items-center justify-center gap-6">
                <Button
                  className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 
                  text-white px-8 py-4 rounded-full text-lg transition-all duration-300"
                  asChild
                >
                  <motion.a 
                    href="https://x.com/EV_Power_" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    Twitter
                  </motion.a>
                </Button>

                <Button
                  className="bg-transparent border-2 border-primary-500 text-primary-300 hover:bg-primary-500/10
                  px-8 py-4 rounded-full text-lg transition-all duration-300"
                  asChild
                >
                  <motion.a 
                    href="https://t.me/EV_Power_Portal" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    Telegram
                  </motion.a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative py-24 bg-black/40">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              <div className="lg:w-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary-900/40 border border-primary-500/20">
                    <span className="text-primary-400 text-sm font-medium tracking-wider">
                      Democratizing Energy
                    </span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-primary-300 to-green-200">
                    Harnessing Blockchain for Renewable Energy
                  </h2>
                </motion.div>
              </div>

              <div className="lg:w-2/3 lg:pt-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  <p className="text-[18px] text-gray-400/90 leading-relaxed font-light">
                    founded in 2025, EV Power utilizes cutting-edge blockchain technology to tackle global energy challenges. by capturing energy generated through vehicle braking, we enable a cleaner, more efficient future for cryptocurrency mining.
                  </p>
                  <p className="text-[18px] text-gray-400/90 leading-relaxed font-light">
                    our goal is to create a decentralized ecosystem where electric vehicles play a pivotal role in powering digital economies with clean, renewable energy.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* 优化背景效果 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent pointer-events-none" />
        </section>

        {/* Core Features Section */}
        <section id="core-features" className="py-24 bg-black/50 relative">
          {/* 添加背景效果 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="container px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200"
            >
              Core Features
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: "/cf-1.png",
                  title: "Decentralized Energy Network",
                  description: "Powered by blockchain technology, EV Power eliminates intermediaries by converting energy recovered from electric vehicle braking into power, building a completely decentralized green energy trading platform."
                },
                {
                  image: "/cf-2.png",
                  title: "Powerful Privacy Protection",
                  description: "With advanced encryption technology and anonymous transactions, all user activities are protected, ensuring no personal information is ever leaked."
                },
                {
                  image: "/cf-3.png",
                  title: "Built-in Encrypted Communication",
                  description: "Seamlessly connect with buyers, sellers, or service providers through the platform's encrypted chat, ensuring secure communication."
                },
                {
                  image: "/cf-4.png",
                  title: "SOLANA Network Integration",
                  description: "Access the platform through the SOLANA network to ensure that your transaction data and mining activities are fully anonymous with no trace left on the internet."
                },
                {
                  image: "/cf-5.png",
                  title: "Low Fees, High Efficiency",
                  description: "Using the native token EVPower, transaction fees are reduced by over 90% compared to traditional methods."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-primary-900/20 backdrop-blur border border-primary-500/20 rounded-xl p-6 hover:bg-primary-900/30 transition-all duration-300 ${index > 2 ? 'md:col-span-3 lg:col-span-1' : ''}`}
                >
                  <div className="relative w-full aspect-[16/9] mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Start Mining Section */}
        <section id="mining" className="py-24 bg-gradient-to-b from-black to-primary-900/20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="container px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200"
            >
              How to Start Mining
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {miningSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-primary-900/20 border-primary-500/20 backdrop-blur h-full hover:bg-primary-900/30 transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary-500/20 rounded-full group-hover:bg-primary-500/30 transition-colors duration-300">
                          <step.icon className="w-6 h-6 text-primary-300" />
                        </div>
                        <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* $EV Power Section */}
        <section id="token" className="py-24 bg-gradient-to-b from-primary-900/20 to-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="container px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
                  $EV Power: The Fuel of Green Energy
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  EV Power is the platform's native token, designed specifically for transactions, payments, and platform
                  services.
                </p>
                <Card className="bg-primary-900/20 border-primary-500/20 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Tokenomics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-gray-400">
                      <span className="text-primary-300">Total Supply:</span> 1 Billion
                    </p>
                    <p className="text-gray-400">
                      <span className="text-primary-300">Ticker:</span> $EV Power
                    </p>
                    <p className="text-gray-400">
                      <span className="text-primary-300">Fees:</span> 0%
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-primary-900/20 border-primary-500/20 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Uses of EV Power</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Zap className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-400">
                        Acts as the only payment method, ensuring low-cost, high-efficiency transactions.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-400">Used as a deposit for dispute resolution.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-400">
                        Incentivizes users to participate in platform activities like purchasing devices or engaging in
                        mining.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Explore Endless Possibilities Section */}
        <section className="py-24 bg-black relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="container px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200"
            >
              Explore Endless Possibilities
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Electric Vehicle Equipment",
                  description: "The latest chargers, battery management systems, regenerative braking systems, and more.",
                  image: "/ee-1.png",
                },
                {
                  title: "Mining Devices and Tools",
                  description: "Hardware solutions that convert electric vehicle regenerative energy into cryptocurrency mining power.",
                  image: "/ee-2.png",
                },
                {
                  title: "Green Energy and Service Solutions",
                  description: "Power management, optimization, and green energy configuration services.",
                  image: "/ee-3.png",
                },
                {
                  title: "Mining Services",
                  description: "Rent mining devices and participate in a decentralized cryptocurrency mining network.",
                  image: "/ee-4.png",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group bg-primary-900/20 hover:bg-primary-900/30 transition-colors duration-300 border-primary-500/20 h-full backdrop-blur">
                    <CardHeader className="relative overflow-hidden">
                      <div className="relative w-full aspect-[16/9]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </CardHeader>
                    <CardContent className="relative z-10 -mt-8">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Features Section */}
        <section id="safety" className="py-24 bg-gradient-to-b from-black to-primary-900/20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="container px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200"
            >
              Safety Features
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "ZK Encryption Technology",
                  description:
                    "Every transaction is secured with zero-knowledge encryption, ensuring safety for both mining data and transaction processes.",
                },
                {
                  icon: Lock,
                  title: "Anonymity Protection",
                  description: "Your privacy is fully protected through the SOLANA network and blockchain technology.",
                },
                {
                  icon: Scale,
                  title: "Escrow System",
                  description:
                    "Funds are held in smart contracts, only released once both parties confirm the transaction, ensuring fair dealings.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-primary-900/20 border-primary-500/20 backdrop-blur h-full hover:bg-primary-900/30 transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-black relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent pointer-events-none" />
          <div className="container px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "How do I register an account?",
                    answer: "You only need to provide a blockchain wallet address. No personal information is required."
                  },
                  {
                    question: "Is mining truly anonymous?",
                    answer: "Yes, the platform does not store any user data, and all transactions are encrypted and fully anonymous through the SOLANA network."
                  },
                  {
                    question: "What payment methods are supported?",
                    answer: "Currently, only EV Power tokens are accepted for transactions and payments."
                  },
                  {
                    question: "How are disputes resolved?",
                    answer: "We use a smart contract escrow system where funds are not released until both parties confirm the transaction. Additionally, a community arbitration mechanism ensures fairness."
                  }
                ].map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-primary-500/20 rounded-lg overflow-hidden bg-primary-900/20 backdrop-blur-sm"
                  >
                    <AccordionTrigger className="px-6 py-4 text-lg font-medium text-white hover:no-underline hover:bg-primary-900/30 transition-colors duration-300">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-black/20">
                      <p className="text-[18px] text-gray-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 1] }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/20 via-primary-500/5 to-transparent"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
          <div className="container px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
                EV Power—Unlock the Green Energy of Electric Vehicles
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                EV Power is building a decentralized, anonymous, and efficient cryptocurrency mining platform, converting
                energy from electric vehicle regenerative braking systems into mining power. Join EV Power, contribute to
                environmental sustainability, and benefit from the digital economy.
              </p>
              <div className="flex items-center justify-center gap-6">
                <Button
                  className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 
                  text-white px-8 py-4 rounded-full text-lg transition-all duration-300"
                  asChild
                >
                  <motion.a 
                    href="https://x.com/EV_Power_" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    Twitter
                  </motion.a>
                </Button>

                <Button
                  className="bg-transparent border-2 border-primary-500 text-primary-300 hover:bg-primary-500/10
                  px-8 py-4 rounded-full text-lg transition-all duration-300"
                  asChild
                >
                  <motion.a 
                    href="https://t.me/EV_Power_Portal" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    Telegram
                  </motion.a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

