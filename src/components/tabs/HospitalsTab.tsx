import Image from 'next/image'
import { hospitals } from '../data'
import { PhoneIcon } from '@heroicons/react/20/solid'

const HospitalsTab = () => {
  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {hospitals.map((person) => (
          <li
            key={person.name}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <Image
                width={32}
                height={32}
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.image}
                alt=""
                unoptimized
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {person.name}
              </h3>
            </div>
            <p className="px-4">{person.address}</p>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:${person.phone_number}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <PhoneIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Call
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default HospitalsTab
