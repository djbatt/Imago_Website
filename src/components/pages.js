import React from 'react'
import { Home, Group, HostMaintenance, Contact } from "grommet-icons"

export default [
  {
    path: "/",
    label: "Home",
    icon: <Home size='large'/>
  },
  {
    path: "/curly-girl",
    label: "Curly Girl®",
    icon: <HostMaintenance size='large'/>
  },
  {
    path: "/our-stylists",
    label: "Our Stylists",
    icon: <Group size='large'/>
  },
  {
    path: "/portfolio",
    label: "Our Work",
    icon: <Group size='large'/>
  },
  {
    path: "/services",
    label: "Services",
    icon: <Contact size='large'/>
  },
  {
    path: "/contact",
    label: "Location & Contact",
    icon: <Contact size='large'/>
  },
]
