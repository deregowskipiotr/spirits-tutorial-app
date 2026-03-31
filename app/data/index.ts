import { GiBeerBottle, GiSnowBottle, GiGlassShot, GiChampagneCork } from "react-icons/gi";
import { LiaGlassWhiskeySolid } from "react-icons/lia";
import { MdOutlineLiquor } from "react-icons/md";

export  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Intention", href: "/#intention" },
    { name: "Hints", href: "/#hints" },
    { name: "Contact", href: "/#contact" },
    { name: "Spirits", href: "/spirits" },
  ];

  export const categories = [
  { 
    name: "Vodka", 
    slug: "vodka", 
    icon: GiGlassShot, 
    description: "Pure expression, crystalline clarity. The essence of the north, filtered through centuries of tradition." 
  },
  {
    name: "Whisky", 
    slug: "whisky", 
    icon: LiaGlassWhiskeySolid, 
    description: "Time, wood, and smoke. A conversation between the cask and the spirit that lasts decades." 
  },
  {
    name: "Gin", 
    slug: "gin", 
    icon: GiBeerBottle, 
    description: "Botanical alchemy. A complex landscape of juniper, herbs, and exotic aromatics." 
  },
  {
    name: "Rum", 
    slug: "rum", 
    icon: GiSnowBottle, 
    description: "Caribbean heritage. Tropical sweetness aging into deep, mahogany complexity." 
  },
  {
    name: "Champagne", 
    slug: "champagne", 
    icon: GiChampagneCork, 
    description: "The height of celebration. Effervescent elegance crafted in the heart of France." 
  },
  {
    name: "Liqueurs", 
    slug: "liqueurs", 
    icon: MdOutlineLiquor, 
    description: "Crafted complexity. The perfect marriage of spirits, sugar, and secret ingredients." 
  },
];  

 // Quotations data
  export const quotations = [
    {
      quote: "Whisky is liquid sunshine, a distillation of time, tradition, and the very soul of the Scottish Highlands.",
      author: "Angus MacLeod",
      title: "Master Distiller, Glenhaven Estate"
    },
    {
      quote: "In every bottle lies a story of patience, where years become seconds and wood becomes wisdom.",
      author: "Eleanor Davenport",
      title: "Keeper of the Quaich"
    }
  ];