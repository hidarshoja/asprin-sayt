import React from 'react';

const doctors = [
  {
    id: 1,
    image: '/04.png',
    ellImage: '/ell.svg',
    name: 'بردیا احمدیان',
    specialty: 'متخصص بیماری های کودکان',
    rating: 4.9,
    consultations: 100,
  },
  {
    id: 2,
    image: '/doc2.png',
    ellImage: '/ell.svg',
    name: 'نگین رضایی',
    specialty: 'متخصص بیماری‌های قلب',
    rating: 4.8,
    consultations: 85,
  },
  {
    id: 3,
    image: '/doc2.png',
    ellImage: '/ell.svg',
    name: 'سارا بهرامی',
    specialty: 'متخصص بیماری‌های گوارش',
    rating: 4.7,
    consultations: 75,
  },
  {
    id: 4,
    image: '/04.png',
    ellImage: '/ell.svg',
    name: 'مهدی حیدری',
    specialty: 'متخصص بیماری‌های پوست',
    rating: 4.6,
    consultations: 60,
  },
];

export default function OnlineDoctor() {
  return (
    <>
      <div className='w-full hidden lg:flex items-center gap-6'>
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className='flex w-1/4 py-6 px-8 flex-col items-center gap-8 rounded-2xl bg-white border border-[#e0e0e0]'
        >
          <div className='relative'>
            <img src={doctor.image} alt="" />
            <img src={doctor.ellImage} className='absolute bottom-1' alt="" />
          </div>
          <span className='text-[#212121] text-[20px] font-medium'>
            {doctor.name}
          </span>
          <span className='text-[#757575] text-[16px] font-normal'>
            {doctor.specialty}
          </span>
          <span className='flex items-center gap-1'>
            <img src="/Star1.svg" alt="star" />
            <span className='text-[#FFA724]'>{doctor.rating}</span>
            <span className='text-[#BDBDBD] text-[16px]'>
              ({doctor.consultations} مشاوره)
            </span>
          </span>
          <button
            className='w-full py-6 px-8 rounded-2xl border border-[#e0e0e0] bg-white text-[#247cff] flex items-center justify-center gap-2'
          >
            <span>نوبت بگیرید</span>
            <span>
              <img src="/arr.svg" alt="" />
            </span>
          </button>
        </div>
      ))}
    </div>
    </>
  );
}

