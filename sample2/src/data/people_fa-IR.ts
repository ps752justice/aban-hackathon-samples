const people = [
  {
    id: 1,
    fullName: "ابراهیم کتابدار",
    age: {
      fixed: 29,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V062_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V062_large.jpg",
    },
  },
  {
    id: 2,
    fullName: "ابراهیم مرادی",
    age: {
      fixed: 21,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه، ",
        city: "جوانرود",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V065_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V065_large.jpg",
    },
  },
  {
    id: 3,
    fullName: "ابراهیم مطوری",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "آبادان",
      },
    ],
    cause: "اصابت گلوله به پشت و سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V061_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V061_large.jpg",
    },
  },
  {
    id: 4,
    fullName: "ابراهیم منصوری",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "اصفهان",
        city: "یزدانشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V063_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V063_large.jpg",
    },
  },
  {
    id: 5,
    fullName: "ابراهیم مهدی پور",
    age: {
      fixed: 50,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "اندیشه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V064_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V064_large.jpg",
    },
  },
  {
    id: 6,
    fullName: "ابوالفضل شعبانی",
    age: {
      or: [16, 17],
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "بهارستان",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V007_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V007_large.jpg",
    },
  },
  {
    id: 7,
    fullName: "احد بشاره دورقی",
    age: {
      fixed: 22,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله به پشت یا پا",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V009_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V009_large.jpg",
    },
  },
  {
    id: 8,
    fullName: "احسان شیری",
    age: {
      range: [30, 35],
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "البرز",
        city: "فردیس",
      },
    ],
    cause: "اصابت گلوله به شکم",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V067_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V067_large.jpg",
    },
  },
  {
    id: 9,
    fullName: "احسان عبدالله نژاد",
    age: {
      fixed: 28,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "بهبهان",
      },
    ],
    cause: "اصابت گلوله به سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V066_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V066_large.jpg",
    },
  },
  {
    id: 10,
    fullName: "احمد چراغیان",
    age: {
      fixed: 40,
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله به بازو و قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V010_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V010_large.jpg",
    },
  },
  {
    id: 11,
    fullName: "احمد خواجه آلبوعلی (ادریس)",
    age: {
      fixed: 17,
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V013_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V013_large.jpg",
    },
  },
  {
    id: 12,
    fullName: "احمد سعدی (جعاوله)",
    age: {
      maybe: 17,
    },
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "خوزستان",
        city: "شوشتر",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V219_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V219_large.jpg",
    },
  },
  {
    id: 13,
    fullName: "احمد قربانی دستجردی",
    age: {
      fixed: 34,
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "اصفهان",
        city: "اصفهان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V011_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V011_large.jpg",
    },
  },
  {
    id: 14,
    fullName: "آذر میرزاپور",
    age: {
      fixed: 49,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V049_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V049_large.jpg",
    },
  },
  {
    id: 15,
    fullName: "آرش کهزادی",
    age: {
      fixed: 16,
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "تهران",
        city: "اسلامشهر",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V039_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V039_large.jpg",
    },
  },
  {
    id: 16,
    fullName: "آرشام ابراهیمی",
    age: {
      fixed: 21,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "اصفهان",
        city: "اصفهان",
      },
    ],
    cause: "اصابت گلوله به پشت",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V043_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V043_large.jpg",
    },
  },
  {
    id: 17,
    fullName: "آرمان (نیما) امانی",
    age: {
      fixed: 20,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "اصفهان",
        city: "یزدانشهر",
      },
    ],
    cause: "اصابت گلوله به پشت و سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V041_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V041_large.jpg",
    },
  },
  {
    id: 18,
    fullName: "آرمین قادری",
    age: {
      fixed: 15,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V042_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V042_large.jpg",
    },
  },
  {
    id: 19,
    fullName: "آریان رجبی",
    age: {
      fixed: 19,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کردستان",
        city: "مریوان",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V040_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V040_large.jpg",
    },
  },
  {
    id: 20,
    fullName: "آزاده ضربی",
    age: {
      fixed: 26,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "فردیس",
      },
    ],
    cause: "اصابت گلوله به گردن",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V048_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V048_large.jpg",
    },
  },
  {
    id: 21,
    fullName: "اسماعیل الله قلی￼￼",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "بهارستان",
      },
    ],
    cause: "اصابت گلوله به گردن",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V074_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V074_large.jpg",
    },
  },
  {
    id: 22,
    fullName: "اسماعیل رضایی",
    age: {
      fixed: 30,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "قدس",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V072_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V072_large.jpg",
    },
  },
  {
    id: 23,
    fullName: "اسماعیل شجاعی",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "رباط کریم",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V073_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V073_large.jpg",
    },
  },
  {
    id: 24,
    fullName: "اسماعیل عرب احمدی",
    age: {
      fixed: 28,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "تهران",
      },
    ],
    cause: "اصابت گلوله به سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V070_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V070_large.jpg",
    },
  },
  {
    id: 25,
    fullName: "اسماعیل قلی پور",
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V071_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V071_large.jpg",
    },
  },
  {
    id: 26,
    fullName: "اشکان خمره ای",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "مشکین دشت",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V045_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V045_large.jpg",
    },
  },
  {
    id: 27,
    fullName: "آشور کلتا",
    age: {
      fixed: 37,
    },
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "البرز",
        city: "فردیس",
      },
    ],
    cause: "اصابت گلوله به بالا تنه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V046_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V046_large.jpg",
    },
  },
  {
    id: 28,
    fullName: "اصغر لشگری",
    age: {
      fixed: 25,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "البرز",
        city: "فردیس",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V044_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V044_large.jpg",
    },
  },
  {
    id: 29,
    fullName: "اقبال اسماعیلی",
    age: {
      fixed: 45,
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله به گردن",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V068_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V068_large.jpg",
    },
  },
  {
    id: 30,
    fullName: "اکبر لنگری",
    age: {
      fixed: 23,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V014_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V014_large.jpg",
    },
  },
  {
    id: 31,
    fullName: "الخمیسی (نام کوچک نامشخص)",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "رامهرمز",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V032_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V032_large.jpg",
    },
  },
  {
    id: 32,
    fullName: "آمنه شهبازی فرد",
    age: {
      fixed: 35,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله به سر و گردن",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V033_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V033_large.jpg",
    },
  },
  {
    id: 33,
    fullName: "امید صالحی",
    age: {
      fixed: 21,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "فردیس",
      },
    ],
    cause: "اصابت گلوله به گردن و شکم",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V187_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V187_large.jpg",
    },
  },
  {
    id: 34,
    fullName: "امید فلاحتی",
    age: {
      fixed: 29,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "قدس",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V186_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V186_large.jpg",
    },
  },
  {
    id: 35,
    fullName: "امیر (شاهپور) اوجانی",
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "پرند",
      },
    ],
    cause: "اصابت گلوله به پا",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V034_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V034_large.jpg",
    },
  },
  {
    id: 36,
    fullName: "امیر الوندی مهر",
    age: {
      fixed: 25,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "فارس",
        city: "گویم",
      },
    ],
    cause: "اصابت گلوله به سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V035_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V035_large.jpg",
    },
  },
  {
    id: 37,
    fullName: "امیرحسین داودوند",
    age: {
      or: [16, 17],
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "اصفهان",
        city: "یزدانشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V036_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V036_large.jpg",
    },
  },
  {
    id: 38,
    fullName: "امیرحسین کبیری",
    age: {
      fixed: 33,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V037_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V037_large.jpg",
    },
  },
  {
    id: 39,
    fullName: "امیررضا عبداللهی",
    age: {
      fixed: 13,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "اسلامشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V038_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V038_large.jpg",
    },
  },
  {
    id: 40,
    fullName: "ایوب بهرامیان",
    age: {
      fixed: 35,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله به پا",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V047_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V047_large.jpg",
    },
  },
  {
    id: 41,
    fullName: "برهان منصورنیا",
    age: {
      fixed: 28,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V058_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V058_large.jpg",
    },
  },
  {
    id: 42,
    fullName: "بنی رشید (نام کوچک نامشخص)",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "رامهرمز",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V052_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V052_large.jpg",
    },
  },
  {
    id: 43,
    fullName: "بهروز اصغرپور",
    age: {
      fixed: 27,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V053_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V053_large.jpg",
    },
  },
  {
    id: 44,
    fullName: "بهروز ملکی",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کردستان",
        city: "مریوان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V055_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V055_large.jpg",
    },
  },
  {
    id: 45,
    fullName: "بهزاد صفرزاده",
    age: {
      fixed: 27,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "نسیم شهر",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V057_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V057_large.jpg",
    },
  },
  {
    id: 46,
    fullName: "بهزاد معینی فر",
    age: {
      fixed: 27,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "اصفهان",
        city: "اصفهان",
      },
    ],
    cause: "اصابت گلوله به گردن",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V056_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V056_large.jpg",
    },
  },
  {
    id: 47,
    fullName: "بهمن جعفری",
    age: {
      fixed: 28,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "فارس",
        city: "شیراز",
      },
    ],
    cause: "اصابت گلوله به قلب و شکم",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V051_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V051_large.jpg",
    },
  },
  {
    id: 48,
    fullName: "پدرام جعفری کمیجانی",
    age: {
      fixed: 18,
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "البرز",
        city: "فردیس",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V189_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V189_large.jpg",
    },
  },
  {
    id: 49,
    fullName: "پژمان (علی) قلیپور ملاطی",
    age: {
      fixed: 19,
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "تهران",
        city: "اندیشه",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V190_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V190_large.jpg",
    },
  },
  {
    id: 50,
    fullName: "پوریا ناصریخواه",
    age: {
      fixed: 23,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "اسلامشهر",
      },
    ],
    cause: "اصابت گلوله به سر و پا",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V191_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V191_large.jpg",
    },
  },
  {
    id: 51,
    fullName: "پویا بختیاری",
    age: {
      fixed: 27,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V192_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V192_large.jpg",
    },
  },
  {
    id: 52,
    fullName: "جاوید میرزایی",
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "رباط کریم",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V105_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V105_large.jpg",
    },
  },
  {
    id: 53,
    fullName: "جبار تجاره",
    age: {
      fixed: 38,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه، ",
        city: "جوانرود",
      },
    ],
    cause: "اصابت گلوله به پشت",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V101_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V101_large.jpg",
    },
  },
  {
    id: 54,
    fullName: "جلیل امام قلی",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V218_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V218_large.jpg",
    },
  },
  {
    id: 55,
    fullName: "جواد بابایی زاده",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "قدس",
      },
    ],
    cause: "اصابت گلوله به شکم، گردن و سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V102_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V102_large.jpg",
    },
  },
  {
    id: 56,
    fullName: "جواد شیازی",
    age: {
      fixed: 26,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "اصفهان",
        city: "اصفهان",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V104_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V104_large.jpg",
    },
  },
  {
    id: 57,
    fullName: "جواد نظری فتح آبادی",
    age: null,
    date: { fixed: "2019-11-15" },
    location: [
      {
        province: "کرمان",
        city: "سیرجان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V103_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V103_large.jpg",
    },
  },
  {
    id: 58,
    fullName: "چنعانی (نام کوچک نامشخص)",
    age: {
      range: [8, 12],
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V059_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V059_large.jpg",
    },
  },
  {
    id: 59,
    fullName: "حسام بارانی راد",
    age: {
      fixed: 17,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V095_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V095_large.jpg",
    },
  },
  {
    id: 60,
    fullName: "حسن صحرایی",
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V093_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V093_large.jpg",
    },
  },
  {
    id: 61,
    fullName: "حسن طاووسی",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: null,
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V094_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V094_large.jpg",
    },
  },
  {
    id: 62,
    fullName: "حسن علیزاده",
    age: {
      fixed: 23,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "قدس",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V091_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V091_large.jpg",
    },
  },
  {
    id: 63,
    fullName: "حسن غزلاوی",
    age: {
      fixed: 27,
    },
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "خوزستان",
        city: "خرمشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V092_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V092_large.jpg",
    },
  },
  {
    id: 64,
    fullName: "حسین آبروی",
    age: null,
    date: { fixed: "2019-11-15" },
    location: [
      {
        province: "تهران",
        city: "قدس",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V193_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V193_large.jpg",
    },
  },
  {
    id: 65,
    fullName: "حسین حیدری",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "فارس",
        city: "شیراز",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V099_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V099_large.jpg",
    },
  },
  {
    id: 66,
    fullName: "حسین قاسمی",
    age: {
      fixed: 19,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "چهاردانگه",
      },
    ],
    cause: "اصابت گلوله به قلب و پا",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V098_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V098_large.jpg",
    },
  },
  {
    id: 67,
    fullName: "حسین قدمی",
    age: {
      fixed: 30,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "فردیس",
      },
    ],
    cause: "اصابت گلوله به شکم و پا",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V097_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V097_large.jpg",
    },
  },
  {
    id: 68,
    fullName: "حسین کریمی علویجه",
    age: {
      fixed: 51,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "اصفهان",
        city: "ملکشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V100_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V100_large.jpg",
    },
  },
  {
    id: 69,
    fullName: "حمزه البریهی",
    age: {
      fixed: 17,
    },
    date: { fixed: "2019-11-15" },
    location: [
      {
        province: "خوزستان",
        city: "اهواز",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V088_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V088_large.jpg",
    },
  },
  {
    id: 70,
    fullName: "حمزه سواری",
    age: {
      range: [22, 25],
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "اهواز",
      },
    ],
    cause: "اصابت گلوله به شکم",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V090_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V090_large.jpg",
    },
  },
  {
    id: 71,
    fullName: "حمزه علی نعمتی",
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "قدس",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V087_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V087_large.jpg",
    },
  },
  {
    id: 72,
    fullName: "حمزه فرجی",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V089_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V089_large.jpg",
    },
  },
  {
    id: 73,
    fullName: "حمید رسولی",
    age: {
      fixed: 32,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به قلب و شکم",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V083_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V083_large.jpg",
    },
  },
  {
    id: 74,
    fullName: "حمید شریفی",
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "اصفهان",
        city: "اصفهان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V084_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V084_large.jpg",
    },
  },
  {
    id: 75,
    fullName: "حمید طاهری",
    age: {
      fixed: 35,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "چهاردانگه",
      },
    ],
    cause: "اصابت گلوله به سینه و قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V220_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V220_large.jpg",
    },
  },
  {
    id: 76,
    fullName: "حمیدرضا حسینی￼￼",
    age: {
      fixed: 30,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V086_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V086_large.jpg",
    },
  },
  {
    id: 77,
    fullName: "حمیدرضا قبولی",
    age: {
      fixed: 19,
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "تهران",
        city: "اندیشه",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V085_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V085_large.jpg",
    },
  },
  {
    id: 78,
    fullName: "حیدرعلی رمضان نژاد",
    age: {
      fixed: 53,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "قدس",
      },
    ],
    cause: "اصابت گلوله به شکم",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V096_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V096_large.jpg",
    },
  },
  {
    id: 79,
    fullName: "خالد غزلاوی",
    age: {
      fixed: 16,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "خرمشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V108_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V108_large.jpg",
    },
  },
  {
    id: 80,
    fullName: "دانیال استواری",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "کردستان",
        city: "مریوان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V060_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V060_large.jpg",
    },
  },
  {
    id: 81,
    fullName: "رامین لمسه",
    age: {
      fixed: 28,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V195_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V195_large.jpg",
    },
  },
  {
    id: 82,
    fullName: "رحیم امین آبادی",
    age: {
      fixed: 35,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "البرز",
        city: "فردیس",
      },
    ],
    cause: "اصابت گلوله به پا",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V194_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V194_large.jpg",
    },
  },
  {
    id: 83,
    fullName: "رزاق ناصرزاده",
    age: {
      fixed: 38,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V199_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V199_large.jpg",
    },
  },
  {
    id: 84,
    fullName: "رسول امانی",
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "اصفهان",
        city: "قهدريجان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V196_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V196_large.jpg",
    },
  },
  {
    id: 85,
    fullName: "رضا پذیرش",
    age: {
      fixed: 23,
    },
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله به گردن",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V233_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V233_large.jpg",
    },
  },
  {
    id: 86,
    fullName: "رضا تاری‌وردی",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V200_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V200_large.jpg",
    },
  },
  {
    id: 87,
    fullName: "رضا حسنوند",
    age: {
      fixed: 26,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "اندیشه",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V203_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V203_large.jpg",
    },
  },
  {
    id: 88,
    fullName: "رضا ساقی",
    age: {
      fixed: 23,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: null,
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V207_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V207_large.jpg",
    },
  },
  {
    id: 89,
    fullName: "رضا عباسی",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "اصفهان",
        city: "اصفهان",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V201_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V201_large.jpg",
    },
  },
  {
    id: 90,
    fullName: "رضا علیپور",
    age: {
      fixed: 34,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "فارس",
        city: "صدرا",
      },
    ],
    cause: "اصابت گلوله به شانه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V202_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V202_large.jpg",
    },
  },
  {
    id: 91,
    fullName: "رضا معظمی گودرزی",
    age: {
      fixed: 19,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V204_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V204_large.jpg",
    },
  },
  {
    id: 92,
    fullName: "رضا منصوری",
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V198_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V198_large.jpg",
    },
  },
  {
    id: 93,
    fullName: "رضا نیسی",
    age: {
      range: [16, 19],
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "اهواز",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V206_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V206_large.jpg",
    },
  },
  {
    id: 94,
    fullName: "روانبخش امامی راد",
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "خوزستان",
        city: "آبادان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V197_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V197_large.jpg",
    },
  },
  {
    id: 95,
    fullName: "زیبا خوشگوار",
    age: {
      fixed: 38,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کردستان",
        city: "سنندج",
      },
    ],
    cause: "خفگی با گاز اشک آور",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V304_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V304_large.jpg",
    },
  },
  {
    id: 96,
    fullName: "ساسان عیدی وندی",
    age: {
      fixed: 17,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "اصفهان",
        city: "یزدانشهر",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V214_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V214_large.jpg",
    },
  },
  {
    id: 97,
    fullName: "سالم امیر سنجریان",
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V213_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V213_large.jpg",
    },
  },
  {
    id: 98,
    fullName: "سجاد باقری",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V211_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V211_large.jpg",
    },
  },
  {
    id: 99,
    fullName: "سجاد رضایی",
    age: {
      fixed: 23,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله به پشت",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V212_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V212_large.jpg",
    },
  },
  {
    id: 100,
    fullName: "سعید رضایی",
    age: {
      fixed: 26,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله به گردن",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V209_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V209_large.jpg",
    },
  },
  {
    id: 101,
    fullName: "سیامک نویدی",
    age: {
      fixed: 32,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "تهران (كيانشهر)",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V225_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V225_large.jpg",
    },
  },
  {
    id: 102,
    fullName: "شبنم دیانی",
    age: {
      fixed: 20,
    },
    date: { fixed: "2019-11-15" },
    location: [
      {
        province: "فارس",
        city: "شیراز",
      },
    ],
    cause: "اصابت گلوله به سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V222_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V222_large.jpg",
    },
  },
  {
    id: 103,
    fullName: "شهرام معینی",
    age: {
      fixed: 47,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V224_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V224_large.jpg",
    },
  },
  {
    id: 104,
    fullName: "شهنام شکری",
    age: {
      fixed: 40,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V223_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V223_large.jpg",
    },
  },
  {
    id: 105,
    fullName: "صادق احمد پناهی",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "فارس",
        city: "صدرا",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V208_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V208_large.jpg",
    },
  },
  {
    id: 106,
    fullName: "صفر عیدی وندی",
    age: {
      or: [23, 24],
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "اصفهان",
        city: "یزدانشهر",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V210_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V210_large.jpg",
    },
  },
  {
    id: 107,
    fullName: "طاهر الخمیس (حطاوی)",
    age: {
      fixed: 25,
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V226_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V226_large.jpg",
    },
  },
  {
    id: 108,
    fullName: "عباس منصوری (عساکره)",
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V002_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V002_large.jpg",
    },
  },
  {
    id: 109,
    fullName: "عباسی (نام کوچک نامشخص)",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "فارس",
        city: "صدرا",
      },
    ],
    cause: "اصابت گلوله به پشت",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V003_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V003_large.jpg",
    },
  },
  {
    id: 110,
    fullName: "عبدالرضا شیرزادی",
    age: {
      fixed: 20,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V006_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V006_large.jpg",
    },
  },
  {
    id: 111,
    fullName: "عبدالله آجرلو",
    age: {
      fixed: 26,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "اسلامشهر",
      },
      {
        province: "تهران",
        city: "شهرک قدس",
      },
    ],
    cause: "اصابت گلوله به لگن",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V004_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V004_large.jpg",
    },
  },
  {
    id: 112,
    fullName: "عبدالله قویمی",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "فارس",
        city: "صدرا",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V005_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V005_large.jpg",
    },
  },
  {
    id: 113,
    fullName: "عثمان نادری",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کردستان",
        city: "مریوان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V188_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V188_large.jpg",
    },
  },
  {
    id: 114,
    fullName: "عدنان هلالی",
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V008_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V008_large.jpg",
    },
  },
  {
    id: 115,
    fullName: "عرفان فائقی",
    age: {
      fixed: 21,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "چهاردانگه",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V069_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V069_large.jpg",
    },
  },
  {
    id: 116,
    fullName: "عزیز اسکندری",
    age: {
      fixed: 33,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "مشکین دشت",
      },
    ],
    cause: "اصابت گلوله به گردن",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V050_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V050_large.jpg",
    },
  },
  {
    id: 117,
    fullName: "علی (یونس) فیروزبخت",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه، ",
        city: "جوانرود",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V015_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V015_large.jpg",
    },
  },
  {
    id: 118,
    fullName: "علی آقایی",
    age: {
      fixed: 21,
    },
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "نسیم شهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V016_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V016_large.jpg",
    },
  },
  {
    id: 119,
    fullName: "علی اکبر ابروتن",
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "تهران",
        city: "اسلامشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V017_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V017_large.jpg",
    },
  },
  {
    id: 120,
    fullName: "علی باوی",
    age: {
      fixed: 25,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V019_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V019_large.jpg",
    },
  },
  {
    id: 121,
    fullName: "علی بغلانی",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "آبادان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V018_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V018_large.jpg",
    },
  },
  {
    id: 122,
    fullName: "علی تمیمی",
    age: {
      fixed: 27,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "اهواز",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V026_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V026_large.jpg",
    },
  },
  {
    id: 123,
    fullName: "علی حسینی",
    age: {
      maybeLess: 18,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "مشکین دشت",
      },
    ],
    cause: "اصابت گلوله به پهلو",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V216_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V216_large.jpg",
    },
  },
  {
    id: 124,
    fullName: "علی خواجه آلبوعلی",
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V012_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V012_large.jpg",
    },
  },
  {
    id: 125,
    fullName: "علی دبیری",
    age: {
      less: 18,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "فارس",
        city: "صدرا",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V020_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V020_large.jpg",
    },
  },
  {
    id: 126,
    fullName: "علی رحمانی",
    age: {
      fixed: 45,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V024_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V024_large.jpg",
    },
  },
  {
    id: 127,
    fullName: "علی سرتیپی",
    age: {
      fixed: 21,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله به شکم",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V025_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V025_large.jpg",
    },
  },
  {
    id: 128,
    fullName: "علی غزلاوی",
    age: {
      fixed: 12,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "خوزستان",
        city: "خرمشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V021_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V021_large.jpg",
    },
  },
  {
    id: 129,
    fullName: "علی فتوحی کوهساره",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "اسلامشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V215_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V215_large.jpg",
    },
  },
  {
    id: 130,
    fullName: "علی محمد آقاپور",
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V022_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V022_large.jpg",
    },
  },
  {
    id: 131,
    fullName: "علی مرادی",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V023_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V023_large.jpg",
    },
  },
  {
    id: 132,
    fullName: "علی موسوی",
    age: {
      fixed: 12,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "رامهرمز",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V217_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V217_large.jpg",
    },
  },
  {
    id: 133,
    fullName: "علیرضا استوان",
    age: {
      fixed: 17,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "رباط کریم",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V031_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V031_large.jpg",
    },
  },
  {
    id: 134,
    fullName: "علیرضا انجوی",
    age: {
      fixed: 26,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "فارس",
        city: "صدرا",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V027_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V027_large.jpg",
    },
  },
  {
    id: 135,
    fullName: "علیرضا محمدزاده",
    age: {
      fixed: 29,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "بهارستان",
      },
    ],
    cause: "اصابت گلوله به پهلو",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V028_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V028_large.jpg",
    },
  },
  {
    id: 136,
    fullName: "علیرضا نوری",
    age: {
      fixed: 17,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V030_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V030_large.jpg",
    },
  },
  {
    id: 137,
    fullName: "علیرضا نیکجه",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله به سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V029_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V029_large.jpg",
    },
  },
  {
    id: 138,
    fullName: "فرامرز پورفرسادی",
    age: {
      fixed: 51,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "البرز",
        city: "فردیس",
      },
    ],
    cause: "ضرب و جرح توسط نیروهای امنیتی",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V075_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V075_large.jpg",
    },
  },
  {
    id: 139,
    fullName: "فرزاد انصاری فر",
    age: {
      fixed: 27,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "بهبهان",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V078_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V078_large.jpg",
    },
  },
  {
    id: 140,
    fullName: "فرشاد حاجی پور میلاسی",
    age: {
      fixed: 30,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله به قلب و سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V077_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V077_large.jpg",
    },
  },
  {
    id: 141,
    fullName: "فرهاد مجدم",
    age: {
      fixed: 38,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V076_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V076_large.jpg",
    },
  },
  {
    id: 142,
    fullName: "قاسم باوی",
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V079_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V079_large.jpg",
    },
  },
  {
    id: 143,
    fullName: "کاوه محمدی",
    age: {
      fixed: 35,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه، ",
        city: "جوانرود",
      },
    ],
    cause: "اصابت گلوله به قلب و سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V107_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V107_large.jpg",
    },
  },
  {
    id: 144,
    fullName: "کمال فرجی",
    age: {
      fixed: 41,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "اسلامشهر",
      },
    ],
    cause: "اصابت گلوله به سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V106_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V106_large.jpg",
    },
  },
  {
    id: 145,
    fullName: "کوروش شیدانی",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V109_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V109_large.jpg",
    },
  },
  {
    id: 146,
    fullName: "کیوان یرفی",
    age: {
      fixed: 42,
    },
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "فارس",
        city: "شیراز",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V221_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V221_large.jpg",
    },
  },
  {
    id: 147,
    fullName: "گلنار صمصامی",
    age: {
      fixed: 34,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V080_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V080_large.jpg",
    },
  },
  {
    id: 148,
    fullName: "مبین عبدالهی",
    age: {
      fixed: 27,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "کرمانشاه، ",
        city: "جوانرود",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V141_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V141_large.jpg",
    },
  },
  {
    id: 149,
    fullName: "مجاهد الجامعی",
    age: {
      range: [15, 17],
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "خوزستان",
        city: "اهواز",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V173_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V173_large.jpg",
    },
  },
  {
    id: 150,
    fullName: "مجتبی عبادی",
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V174_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V174_large.jpg",
    },
  },
  {
    id: 151,
    fullName: "مجید شیخی",
    age: {
      fixed: 22,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "اسلامشهر",
      },
    ],
    cause: "اصابت گلوله به سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V114_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V114_large.jpg",
    },
  },
  {
    id: 152,
    fullName: "مجید فلاحپور",
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: null,
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V112_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V112_large.jpg",
    },
  },
  {
    id: 153,
    fullName: "مجید مجدم",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V113_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V113_large.jpg",
    },
  },
  {
    id: 154,
    fullName: "مجید هاشمی",
    age: {
      fixed: 34,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "فارس",
        city: "صدرا",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V115_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V115_large.jpg",
    },
  },
  {
    id: 155,
    fullName: "محسن آلبوعلی",
    age: {
      or: [17, 27],
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "شادگان",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V167_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V167_large.jpg",
    },
  },
  {
    id: 156,
    fullName: "محسن ایرانشاهی",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "چهاردانگه",
      },
    ],
    cause: "اصابت گلوله به ران",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V168_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V168_large.jpg",
    },
  },
  {
    id: 157,
    fullName: "محسن جعفرپناه",
    age: {
      fixed: 30,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "اسلامشهر",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V169_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V169_large.jpg",
    },
  },
  {
    id: 158,
    fullName: "محسن عبادی مهر",
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V178_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V178_large.jpg",
    },
  },
  {
    id: 159,
    fullName: "محسن کرمی نیا",
    age: {
      fixed: 34,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V170_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V170_large.jpg",
    },
  },
  {
    id: 160,
    fullName: "محسن محمدپور",
    age: {
      fixed: 17,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "خرمشهر",
      },
    ],
    cause: "ضرب و جرح توسط نیروهای امنیتی",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V171_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V171_large.jpg",
    },
  },
  {
    id: 161,
    fullName: "محمد (نام فامیلی نامشخص)",
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V142_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V142_large.jpg",
    },
  },
  {
    id: 162,
    fullName: "محمد ابراهیمی",
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "اصفهان",
        city: "قهدريجان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V145_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V145_large.jpg",
    },
  },
  {
    id: 163,
    fullName: "محمد پارسا عزیزی مقدم",
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V157_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V157_large.jpg",
    },
  },
  {
    id: 164,
    fullName: "محمد پالانی",
    age: {
      fixed: 17,
    },
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V156_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V156_large.jpg",
    },
  },
  {
    id: 165,
    fullName: "محمد پورپیرعلی",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "اصفهان",
        city: "یزدانشهر",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V158_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V158_large.jpg",
    },
  },
  {
    id: 166,
    fullName: "محمد تیموری",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله به سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V164_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V164_large.jpg",
    },
  },
  {
    id: 167,
    fullName: "محمد حشمدار",
    age: {
      fixed: 33,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "بهبهان",
      },
    ],
    cause: "اصابت گلوله به گردن",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V146_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V146_large.jpg",
    },
  },
  {
    id: 168,
    fullName: "محمد حیدریان",
    age: {
      fixed: 19,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V147_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V147_large.jpg",
    },
  },
  {
    id: 169,
    fullName: "محمد خالدی",
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V151_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V151_large.jpg",
    },
  },
  {
    id: 170,
    fullName: "محمد خالقی",
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V152_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V152_large.jpg",
    },
  },
  {
    id: 171,
    fullName: "محمد خزایی",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V153_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V153_large.jpg",
    },
  },
  {
    id: 172,
    fullName: "محمد داستانخواه",
    age: {
      fixed: 15,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "فارس",
        city: "صدرا",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V144_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V144_large.jpg",
    },
  },
  {
    id: 173,
    fullName: "محمد طاهری",
    age: {
      fixed: 19,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "بهارستان",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V163_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V163_large.jpg",
    },
  },
  {
    id: 174,
    fullName: "محمد عربی",
    age: {
      fixed: 20,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V143_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V143_large.jpg",
    },
  },
  {
    id: 175,
    fullName: "محمد معین صالحی",
    age: {
      fixed: 19,
    },
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V155_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V155_large.jpg",
    },
  },
  {
    id: 176,
    fullName: "محمد ملکی",
    age: {
      fixed: 23,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "بهارستان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V154_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V154_large.jpg",
    },
  },
  {
    id: 177,
    fullName: "محمدامین الله قلی",
    age: {
      fixed: 23,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "فردیس",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V001_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V001_large.jpg",
    },
  },
  {
    id: 178,
    fullName: "محمدجواد عابدی",
    age: {
      fixed: 16,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "اصفهان",
        city: "اصفهان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V150_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V150_large.jpg",
    },
  },
  {
    id: 179,
    fullName: "محمدحسین طاهایی",
    age: {
      fixed: 34,
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V149_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V149_large.jpg",
    },
  },
  {
    id: 180,
    fullName: "محمدحسین قنواتی",
    age: {
      fixed: 25,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "بهبهان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V148_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V148_large.jpg",
    },
  },
  {
    id: 181,
    fullName: "محمدرضا احمدی",
    age: {
      fixed: 17,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کردستان",
        city: "سنندج",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V159_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V159_large.jpg",
    },
  },
  {
    id: 182,
    fullName: "محمدرضا الحسینی",
    age: {
      fixed: 30,
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "تهران",
        city: "تهران",
      },
    ],
    cause: "اصابت گلوله به گردن",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V160_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V160_large.jpg",
    },
  },
  {
    id: 183,
    fullName: "محمدرضا اینانلو",
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V165_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V165_large.jpg",
    },
  },
  {
    id: 184,
    fullName: "محمدرضا جمشیدی",
    age: {
      fixed: 20,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "فارس",
        city: "شیراز",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V166_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V166_large.jpg",
    },
  },
  {
    id: 185,
    fullName: "محمدرضا عسافی زرگانی",
    age: {
      fixed: 20,
    },
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "خوزستان",
        city: "اهواز",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V205_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V205_large.jpg",
    },
  },
  {
    id: 186,
    fullName: "محمدرضا محمدی",
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: null,
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V161_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V161_large.jpg",
    },
  },
  {
    id: 187,
    fullName: "محمدرضا نیکوروان",
    age: {
      fixed: 22,
    },
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: null,
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V162_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V162_large.jpg",
    },
  },
  {
    id: 188,
    fullName: "محمود دشتی نیا",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "بهبهان",
      },
    ],
    cause: "اصابت گلوله به سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V110_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V110_large.jpg",
    },
  },
  {
    id: 189,
    fullName: "مرتضی صادقی نادر",
    age: {
      fixed: 35,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V175_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V175_large.jpg",
    },
  },
  {
    id: 190,
    fullName: "مسعود بهارلو",
    age: {
      fixed: 25,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "اصفهان",
        city: "اصفهان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V118_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V118_large.jpg",
    },
  },
  {
    id: 191,
    fullName: "مصطفی ابروتن",
    age: {
      fixed: 19,
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "تهران",
        city: "اسلامشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V176_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V176_large.jpg",
    },
  },
  {
    id: 192,
    fullName: "مصطفی رودباریان",
    age: {
      fixed: 34,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله به سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V179_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V179_large.jpg",
    },
  },
  {
    id: 193,
    fullName: "مصطفی فرزامی",
    age: {
      fixed: 27,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: null,
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V177_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V177_large.jpg",
    },
  },
  {
    id: 194,
    fullName: "مظفر وطن دوست",
    age: {
      fixed: 45,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V180_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V180_large.jpg",
    },
  },
  {
    id: 195,
    fullName: "معین مسلم پور",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "اندیمشک",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V172_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V172_large.jpg",
    },
  },
  {
    id: 196,
    fullName: "منصور دریس",
    age: {
      range: [30, 34],
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V117_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V117_large.jpg",
    },
  },
  {
    id: 197,
    fullName: "منصور عساکره",
    age: {
      fixed: 41,
    },
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V116_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V116_large.jpg",
    },
  },
  {
    id: 198,
    fullName: "مهدی احمدی",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "چهاردانگه",
      },
    ],
    cause: "اصابت گلوله به پا",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V121_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V121_large.jpg",
    },
  },
  {
    id: 199,
    fullName: "مهدی پاپی",
    age: {
      fixed: 31,
    },
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "البرز",
        city: "فردیس",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V119_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V119_large.jpg",
    },
  },
  {
    id: 200,
    fullName: "مهدی جهانبازی",
    age: {
      fixed: 35,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "فارس",
        city: "شیراز",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V123_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V123_large.jpg",
    },
  },
  {
    id: 201,
    fullName: "مهدی دائمی",
    age: {
      fixed: 25,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V122_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V122_large.jpg",
    },
  },
  {
    id: 202,
    fullName: "مهدی رودباریان",
    age: {
      fixed: 21,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V126_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V126_large.jpg",
    },
  },
  {
    id: 203,
    fullName: "مهدی سبزی",
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "اصفهان",
        city: "ملکشهر",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V127_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V127_large.jpg",
    },
  },
  {
    id: 204,
    fullName: "مهدی عباسی امجد",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V120_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V120_large.jpg",
    },
  },
  {
    id: 205,
    fullName: "مهدی کلوخی",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "مشکین دشت",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V124_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V124_large.jpg",
    },
  },
  {
    id: 206,
    fullName: "مهدی نکوئی",
    age: {
      fixed: 23,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "فارس",
        city: "شیراز",
      },
    ],
    cause: "اصابت گلوله به پشت",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V125_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V125_large.jpg",
    },
  },
  {
    id: 207,
    fullName: "مهدی ولی پور",
    age: {
      fixed: 16,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "بهارستان",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V128_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V128_large.jpg",
    },
  },
  {
    id: 208,
    fullName: "مهران تاک",
    age: {
      fixed: 32,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کردستان",
        city: "مریوان",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V129_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V129_large.jpg",
    },
  },
  {
    id: 209,
    fullName: "مهران زاهدی",
    age: {
      fixed: 19,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله به گردن",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V130_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V130_large.jpg",
    },
  },
  {
    id: 210,
    fullName: "مهرداد حسابی شیجانی",
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: null,
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V132_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V132_large.jpg",
    },
  },
  {
    id: 211,
    fullName: "مهرداد دشتی نیا",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "بهبهان",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V131_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V131_large.jpg",
    },
  },
  {
    id: 212,
    fullName: "مهرداد معین فر",
    age: {
      fixed: 32,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله به قلب",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V133_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V133_large.jpg",
    },
  },
  {
    id: 213,
    fullName: "مهرزاد رضایی",
    age: {
      fixed: 25,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله به لگن",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V134_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V134_large.jpg",
    },
  },
  {
    id: 214,
    fullName: "مهناز مهدی زاده",
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله به سر، سینه و شکم",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V111_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V111_large.jpg",
    },
  },
  {
    id: 215,
    fullName: "میثم احمدی",
    age: {
      fixed: 26,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به شکم",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V135_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V135_large.jpg",
    },
  },
  {
    id: 216,
    fullName: "میثم مجدم",
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "خوزستان",
        city: "اهواز",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V137_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V137_large.jpg",
    },
  },
  {
    id: 217,
    fullName: "میثم منیعات",
    age: {
      fixed: 25,
    },
    date: { fixed: "2019-11-15" },
    location: [
      {
        province: "خوزستان",
        city: "خرمشهر",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V136_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V136_large.jpg",
    },
  },
  {
    id: 218,
    fullName: "میلاد حمیدی",
    age: {
      fixed: 19,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "خوزستان",
        city: "خرمشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V138_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V138_large.jpg",
    },
  },
  {
    id: 219,
    fullName: "میلاد محققی",
    age: {
      fixed: 24,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V139_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V139_large.jpg",
    },
  },
  {
    id: 220,
    fullName: "مینا شیخی",
    age: {
      fixed: 58,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "تهران",
      },
    ],
    cause: "اصابت گلوله به سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V140_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V140_large.jpg",
    },
  },
  {
    id: 221,
    fullName: "نادر بیژنوند",
    age: {
      fixed: 22,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V181_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V181_large.jpg",
    },
  },
  {
    id: 222,
    fullName: "نادر مومنی",
    age: {
      fixed: 55,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
    ],
    cause: "اصابت گلوله به بالا تنه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V182_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V182_large.jpg",
    },
  },
  {
    id: 223,
    fullName: "نادر نصیرپور",
    age: {
      fixed: 66,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "فارس",
        city: "شیراز",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V183_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V183_large.jpg",
    },
  },
  {
    id: 224,
    fullName: "ناصر رضایی",
    age: {
      fixed: 36,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "البرز",
        city: "کرج",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V184_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V184_large.jpg",
    },
  },
  {
    id: 225,
    fullName: "نوید بهبودی",
    age: {
      fixed: 23,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "قدس",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V185_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V185_large.jpg",
    },
  },
  {
    id: 226,
    fullName: "هادی قربانی",
    age: {
      fixed: 20,
    },
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "نسیم شهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V081_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V081_large.jpg",
    },
  },
  {
    id: 227,
    fullName: "هادی محمدی￼￼",
    age: {
      fixed: 24,
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: null,
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V082_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V082_large.jpg",
    },
  },
  {
    id: 228,
    fullName: null,
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V303_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V303_large.jpg",
    },
  },
  {
    id: 229,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V292_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V292_large.jpg",
    },
  },
  {
    id: 230,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V256_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V256_large.jpg",
    },
  },
  {
    id: 231,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V257_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V257_large.jpg",
    },
  },
  {
    id: 232,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V258_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V258_large.jpg",
    },
  },
  {
    id: 233,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V259_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V259_large.jpg",
    },
  },
  {
    id: 234,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V260_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V260_large.jpg",
    },
  },
  {
    id: 235,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V261_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V261_large.jpg",
    },
  },
  {
    id: 236,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V262_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V262_large.jpg",
    },
  },
  {
    id: 237,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V263_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V263_large.jpg",
    },
  },
  {
    id: 238,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V264_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V264_large.jpg",
    },
  },
  {
    id: 239,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V265_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V265_large.jpg",
    },
  },
  {
    id: 240,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V266_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V266_large.jpg",
    },
  },
  {
    id: 241,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V267_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V267_large.jpg",
    },
  },
  {
    id: 242,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V268_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V268_large.jpg",
    },
  },
  {
    id: 243,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V269_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V269_large.jpg",
    },
  },
  {
    id: 244,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V270_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V270_large.jpg",
    },
  },
  {
    id: 245,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V271_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V271_large.jpg",
    },
  },
  {
    id: 246,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V272_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V272_large.jpg",
    },
  },
  {
    id: 247,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V273_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V273_large.jpg",
    },
  },
  {
    id: 248,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V274_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V274_large.jpg",
    },
  },
  {
    id: 249,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V275_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V275_large.jpg",
    },
  },
  {
    id: 250,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V276_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V276_large.jpg",
    },
  },
  {
    id: 251,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V277_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V277_large.jpg",
    },
  },
  {
    id: 252,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V278_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V278_large.jpg",
    },
  },
  {
    id: 253,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V279_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V279_large.jpg",
    },
  },
  {
    id: 254,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V280_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V280_large.jpg",
    },
  },
  {
    id: 255,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V281_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V281_large.jpg",
    },
  },
  {
    id: 256,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V282_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V282_large.jpg",
    },
  },
  {
    id: 257,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V283_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V283_large.jpg",
    },
  },
  {
    id: 258,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V284_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V284_large.jpg",
    },
  },
  {
    id: 259,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V285_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V285_large.jpg",
    },
  },
  {
    id: 260,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V286_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V286_large.jpg",
    },
  },
  {
    id: 261,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V287_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V287_large.jpg",
    },
  },
  {
    id: 262,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V288_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V288_large.jpg",
    },
  },
  {
    id: 263,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "شهریار",
      },
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V289_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V289_large.jpg",
    },
  },
  {
    id: 264,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V235_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V235_large.jpg",
    },
  },
  {
    id: 265,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V236_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V236_large.jpg",
    },
  },
  {
    id: 266,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V237_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V237_large.jpg",
    },
  },
  {
    id: 267,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V238_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V238_large.jpg",
    },
  },
  {
    id: 268,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V239_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V239_large.jpg",
    },
  },
  {
    id: 269,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V240_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V240_large.jpg",
    },
  },
  {
    id: 270,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V241_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V241_large.jpg",
    },
  },
  {
    id: 271,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V242_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V242_large.jpg",
    },
  },
  {
    id: 272,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V243_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V243_large.jpg",
    },
  },
  {
    id: 273,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V244_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V244_large.jpg",
    },
  },
  {
    id: 274,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V245_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V245_large.jpg",
    },
  },
  {
    id: 275,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V246_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V246_large.jpg",
    },
  },
  {
    id: 276,
    fullName: null,
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "بهارستان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V227_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V227_large.jpg",
    },
  },
  {
    id: 277,
    fullName: null,
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "بهارستان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V228_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V228_large.jpg",
    },
  },
  {
    id: 278,
    fullName: null,
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "بهارستان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V229_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V229_large.jpg",
    },
  },
  {
    id: 279,
    fullName: null,
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "چهاردانگه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V230_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V230_large.jpg",
    },
  },
  {
    id: 280,
    fullName: null,
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "تهران",
        city: "چهاردانگه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V231_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V231_large.jpg",
    },
  },
  {
    id: 281,
    fullName: null,
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "تهران",
        city: "فردیس",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V232_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V232_large.jpg",
    },
  },
  {
    id: 282,
    fullName: null,
    age: null,
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "کرمانشاه، ",
        city: "جوانرود",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V234_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V234_large.jpg",
    },
  },
  {
    id: 283,
    fullName: null,
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V247_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V247_large.jpg",
    },
  },
  {
    id: 284,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "اصفهان",
        city: "ملکشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V248_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V248_large.jpg",
    },
  },
  {
    id: 285,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "رباط کریم",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V249_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V249_large.jpg",
    },
  },
  {
    id: 286,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "رباط کریم",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V250_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V250_large.jpg",
    },
  },
  {
    id: 287,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "تهران",
        city: "رباط کریم",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V251_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V251_large.jpg",
    },
  },
  {
    id: 288,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "فارس",
        city: "صدرا",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V252_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V252_large.jpg",
    },
  },
  {
    id: 289,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "فارس",
        city: "صدرا",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V255_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V255_large.jpg",
    },
  },
  {
    id: 290,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "فارس",
        city: "صدرا",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V253_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V253_large.jpg",
    },
  },
  {
    id: 291,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "فارس",
        city: "صدرا",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V254_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V254_large.jpg",
    },
  },
  {
    id: 292,
    fullName: null,
    age: null,
    date: { fixed: "2019-11-15" },
    location: [
      {
        province: "کرمان",
        city: "سیرجان",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V291_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V291_large.jpg",
    },
  },
  {
    id: 293,
    fullName: null,
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "فارس",
        city: "شیراز",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V290_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V290_large.jpg",
    },
  },
  {
    id: 294,
    fullName: "هویت شناسایی نشده (احتمالا بهروز فلاح)",
    age: null,
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "بومهن",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V054_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V054_large.jpg",
    },
  },
  {
    id: 295,
    fullName: "وحید توسلی دوست",
    age: {
      fixed: 48,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "فارس",
        city: "شیراز",
      },
    ],
    cause: "اصابت گلوله به سینه",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V294_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V294_large.jpg",
    },
  },
  {
    id: 296,
    fullName: "وحید دامور",
    age: {
      fixed: 30,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "ملارد",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V293_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V293_large.jpg",
    },
  },
  {
    id: 297,
    fullName: "یاسین (مجتبی) رمضان نژاد",
    age: {
      fixed: 34,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "قدس",
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V298_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V298_large.jpg",
    },
  },
  {
    id: 298,
    fullName: "یدالله حاجی طاری پور",
    age: {
      or: [63, 64],
    },
    date: { fixed: "2019-11-16" },
    location: [
      {
        province: "فارس",
        city: "شیراز",
      },
    ],
    cause: "خفگی با گاز اشک آور",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V295_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V295_large.jpg",
    },
  },
  {
    id: 299,
    fullName: "یعقوب خسروی",
    age: null,
    date: { or: ["2019-11-16", "2019-11-17"] },
    location: [
      {
        province: "اصفهان",
        city: null,
      },
    ],
    cause: "اصابت گلوله به سر",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V296_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V296_large.jpg",
    },
  },
  {
    id: 300,
    fullName: "یعقوب نجفی بابادی",
    age: {
      fixed: 26,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "اصفهان",
        city: "اصفهان",
      },
    ],
    cause: "اصابت گلوله به پهلو",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V297_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V297_large.jpg",
    },
  },
  {
    id: 301,
    fullName: "یوسف آلبو عبادی",
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V300_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V300_large.jpg",
    },
  },
  {
    id: 302,
    fullName: "یوسف خالدی",
    age: null,
    date: { fixed: "2019-11-18" },
    location: [
      {
        province: "خوزستان",
        city: "ماهشهر",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V302_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V302_large.jpg",
    },
  },
  {
    id: 303,
    fullName: "یوسف دری",
    age: {
      fixed: 35,
    },
    date: { fixed: "2019-11-17" },
    location: [
      {
        province: "تهران",
        city: "بومهن",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V301_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V301_large.jpg",
    },
  },
  {
    id: 304,
    fullName: "یونس جلیلی",
    age: null,
    date: { range: ["2019-11-15", "2019-11-18"] },
    location: [
      {
        province: "کرمانشاه",
        city: "کرمانشاه",
      },
    ],
    cause: "اصابت گلوله",
    image: {
      xsmall:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V299_48px.jpg",
      medium:
        "https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V299_large.jpg",
    },
  },
];

export default people;
