import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure
        as="nav"
        className="relative bg-blue-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
        >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button*/}
        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-blue-500 hover:bg-white/5 hover:text-white sm:hidden focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
        <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
        </DisclosureButton>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-blue-500">
        <path fillRule="evenodd" d="M8.128 9.155a3.751 3.751 0 1 1 .713-1.321l1.136.656a.75.75 0 0 1 .222 1.104l-.006.007a.75.75 0 0 1-1.032.157 1.421 1.421 0 0 0-.113-.072l-.92-.531Zm-4.827-3.53a2.25 2.25 0 0 1 3.994 2.063.756.756 0 0 0-.122.23 2.25 2.25 0 0 1-3.872-2.293ZM13.348 8.272a5.073 5.073 0 0 0-3.428 3.57 5.08 5.08 0 0 0-.165 1.202 1.415 1.415 0 0 1-.707 1.201l-.96.554a3.751 3.751 0 1 0 .734 1.309l13.729-7.926a.75.75 0 0 0-.181-1.374l-.803-.215a5.25 5.25 0 0 0-2.894.05l-5.325 1.629Zm-9.223 7.03a2.25 2.25 0 1 0 2.25 3.897 2.25 2.25 0 0 0-2.25-3.897ZM12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
        <path d="M16.372 12.615a.75.75 0 0 1 .75 0l5.43 3.135a.75.75 0 0 1-.182 1.374l-.802.215a5.25 5.25 0 0 1-2.894-.051l-5.147-1.574a.75.75 0 0 1-.156-1.367l3-1.732Z" />
        </svg>
        </div>
        <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
        {navigation.map((item) => (
            <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
                item.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium',
            )}
            >
            {item.name}
            </a>
        ))}
        </div>
        </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button
        type="button"
        className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
        >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View notifications</span>
        <BellIcon aria-hidden="true" className="size-6 text-blue-500 md:text-white h-7 w-7" />
        </button>
        
        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-3">
        <MenuButton className="relative flex rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Open user menu</span>
        <img
        alt=""
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="size-8 rounded-full bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10"
        />
        </MenuButton>
        
        <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline outline-1 -outline-offset-1 outline-white/10 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
        <MenuItem>
        <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:outline-none"
        >
        Your profile
        </a>
        </MenuItem>
        <MenuItem>
        <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:outline-none"
        >
        Settings
        </a>
        </MenuItem>
        <MenuItem>
        <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:outline-none"
        >
        Sign out
        </a>
        </MenuItem>
        </MenuItems>
        </Menu>
        </div>
        </div>
        </div>
        
        <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
            <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
                item.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
            )}
            >
            {item.name}
            </DisclosureButton>
        ))}
        </div>
        </DisclosurePanel>
        </Disclosure>
    )
}
