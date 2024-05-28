'use client'
import { useState } from 'react'

import Footer from '@/components/Footer'
import HospitalsTab from '@/components/tabs/HospitalsTab'
import PharmaciesTab from '@/components/tabs/PharmaciesTab'
import ProfessionalsTab from '@/components/tabs/ProfessionalsTab'
import Navbar from '@/components/Navbar'

const Appointment = () => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  const [tabs, setTabs] = useState([
    { name: 'Medical Personnels', href: '#', current: false },
    { name: 'Pharmacies', href: '#', current: true },
    { name: 'Hospitals', href: '#', current: false },
  ])

  const [idx, setIdx] = useState(0)
  const [selectVal, setSelectVal] = useState('')

  const changeTab = (indx: any) => {
    setIdx(indx)
  }

  const pageTabs = [
    <ProfessionalsTab key={0} />,
    <PharmaciesTab key={1} />,
    <HospitalsTab key={2} />,
  ]

  return (
    <>
      <Navbar />
      <div>
        <div className="mx-auto mb-12 mt-32 w-[90%] sm:mb-20">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Be A Tab Away From All Your Healthcare Needs!
          </h2>
          <p className="mt-6">
            At remoteMedcare, accessibility to quality healthcare is our topmost
            priority. Do you want to locate hospitals and pharmacies near you or
            speak to a medical personnel?, we got you covered. Speak to quality
            healthcare professionals just by tapping a button!. You can also
            contact or locate hospitals and pharmacies near you.
          </p>
        </div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs.find((tab: any) => tab.current)?.name}
            onChange={(e) => setSelectVal(e.target.value)}
          >
            {tabs.map((tab, index) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              {tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setIdx(index)}
                  className={classNames(
                    tab.current
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'w-1/3 border-b-2 px-1 py-4 text-center text-sm font-medium',
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-12 w-[90%]  sm:mb-20">
        <div className="hidden sm:block">{pageTabs[idx]}</div>
        <div className="block sm:hidden">
          {selectVal === 'Medical Personnels' ? (
            <ProfessionalsTab />
          ) : selectVal === 'Pharmacies' ? (
            <PharmaciesTab />
          ) : selectVal === 'Hospitals' ? (
            <HospitalsTab />
          ) : (
            ''
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Appointment
