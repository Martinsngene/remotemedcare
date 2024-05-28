'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  MinusSmallIcon,
  PlusSmallIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  RocketLaunchIcon,
  HandRaisedIcon,
  UserGroupIcon,
  AcademicCapIcon,
  SparklesIcon,
  InformationCircleIcon,
  SunIcon,
} from '@heroicons/react/20/solid'
import { faqs } from '@/components/data'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Logo } from '@/components/Logo'
import HeroBG from '@/images/professionals/hero.png'
import Welcome from '@/images/professionals/welcome.jpg'
import Emergency from '@/components/Emergency'
import Maga from '@/images/professionals/maga.jpeg'
import Martins from '@/images/professionals/Martins.jpeg'
import Mimi from '@/images/professionals/mimi.jpeg'
import Deborah from '@/images/professionals/debbie.jpeg'

const navigation = [
  { name: 'Home', href: '#' },
  // { name: 'About', href: '#' },
  // { name: 'Services', href: '#' },
  { name: 'Appointment', href: '/appointment' },
  { name: 'Resources', href: 'resources' },
]
const values = [
  {
    name: ' Unmatched Convenience',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Comprehensive Care',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: HandRaisedIcon,
  },
  {
    name: 'High-Quality Medical Professionals',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.',
    icon: UserGroupIcon,
  },
  {
    name: 'Personalized Healthcare',
    description:
      'Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Commitment to Privacy and Security',
    description:
      'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
    icon: SparklesIcon,
  },

  {
    name: 'Cost-Effective Solutions',
    description:
      'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
    icon: SparklesIcon,
  },
  {
    name: 'Excellent Customer Support.',
    description:
      'Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.',
    icon: SunIcon,
  },
  {
    name: 'Cutting-Edge Technology',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: RocketLaunchIcon,
  },
]

const team = [
  {
    name: 'Ikomoni Oghenemaga Joseph',
    role: 'Data Analyst',
    imageUrl: Maga,
    location: 'Delta State',
  },
  {
    name: 'Uthunu Miracle Ufuoma',
    role: 'Data Scientist',
    imageUrl: Mimi,
    location: 'Delta State',
  },
  {
    name: 'Emekowa Deborah',
    role: 'Product Designer',
    imageUrl: Deborah,
    location: 'Delta State',
  },
  {
    name: 'Martins Ngene',
    role: 'Software Developer',
    imageUrl: Martins,
    location: 'Delta State',
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <Emergency />
      {/* Header */}
      {/* <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Medicare</span>
              <Image
                height={8}
                width={8}
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-white"
            >
              Staff Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Medicare</span>
                <Image
                  height={8}
                  width={8}
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Staff Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header> */}

      <main>
        {/* Hero */}
        <div className="bg-gray-900">
          <header className="absolute inset-x-0 top-0 z-50">
            <nav
              className="flex items-center justify-between px-6 py-12 lg:px-8"
              aria-label="Global"
            >
              <div className="flex  lg:flex-1">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">remoteMedcare</span>
                  <Logo />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a
                  href="/login"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Staff Log in <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </nav>
            <Dialog
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-50" />
              <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                <div className="flex items-center justify-between">
                  <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">remoteMedcare</span>
                    <Logo />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/25">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6">
                      <a
                        href="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      >
                        Staff Log in
                      </a>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </header>

          <div className="relative isolate overflow-hidden pt-14">
            {/* Hero Background Image */}
            <Image
              height={100}
              width={700}
              src={HeroBG}
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  Announcing our next round of funding.{' '}
                  <a href="#" className="font-semibold text-white">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div> */}
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Making Health-Care Easily Accessible
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Leveraging advanced technology to deliver comprehensive
                  healthcare solutions remotely, connecting patients with
                  skilled healthcare professionals for efficient, timely, and
                  personalised medical care.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-[#1733C7] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Welcome */}
        <div className="mx-auto flex max-w-7xl flex-col items-center bg-white px-6 py-24 lg:px-8">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Welcome to remoteMedCare
          </h2>

          <div className="flex flex-col items-center">
            <figure className="mt-16 max-w-3xl">
              <Image
                height={100}
                width={800}
                className="aspect-video rounded-xl bg-gray-50 object-cover"
                src={Welcome}
                alt=""
              />
              {/* <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                <InformationCircleIcon
                  className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                  aria-hidden="true"
                />
                Faucibus commodo massa rhoncus, volutpat.
              </figcaption> */}
            </figure>

            <div className="mt-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                About us
              </h2>
              <p className="mt-4 text-xl leading-8 text-gray-700">
                Welcome to remoteMedCare, where we believe that quality
                healthcare should be accessible to everyone regardless of
                location. Our mission is to revolutionize healthcare experience
                by leveraging accessible and high quality medical care to
                bringing medical expertise right at your fingertips.
              </p>

              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                Who we are
              </h2>
              <p className="mt-4 text-xl leading-8 text-gray-700">
                At remoteMedCare, we are a team of dedicated healthcare
                professionals that provides exceptional remote healthcare
                services. our divers team includes experience doctors, skilled
                nurses, and pharmacists who are passionate about making
                healthcare accessible and efficient.
              </p>

              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                Our Vision
              </h2>
              <p className="mt-4 text-xl leading-8 text-gray-700">
                We envision a world where everyone can receive the medical care
                needed without barriers of distance, time, or mobility. By
                harnessing the power of telemedicine, we aim to create a
                seamless experience that connects patients with top-tier medical
                professionals from the comfort of their homes.
              </p>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Choosing remoteMedCare means opting for a healthcare provider that
              prioritizes your health, convenience and overall well-being.
              Experience the future of healthcare today with remoteMedCare, your
              trusted partner in remote healthcare.
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              At remoteMedCare, we understand that choosing the right healthcare
              provider is a crucial decision. Here&apos;s why we stand out as
              the best choice for your remote healthcare needs:
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-lg leading-7 text-black sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="ml-2 font-semibold text-black">
                  <value.icon
                    className="absolute left-1 top-1 h-8 w-8 text-indigo-500"
                    aria-hidden="true"
                  />
                  {value.name}
                </dt>{' '}
                <dd className="mt-6 text-xl leading-8 text-gray-700">
                  {/* {value.description} */}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        <div className="bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated healthcare accessible to everyone.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
            >
              {team.map((person) => (
                <li key={person.name}>
                  <Image
                    height={100}
                    width={600}
                    className="aspect-[14/13] w-full rounded-2xl object-cover"
                    src={person.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-300">
                    {person.role}
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    {person.location}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Price */}

        {/* FAQ section */}
        <div className="mx-auto my-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }: any) => (
                    <>
                      <dt>
                        <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}
