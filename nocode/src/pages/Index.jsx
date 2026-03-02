import React from 'react';
import PropertyCard from '../components/PropertyCard';

const Index = () => {
  const sampleProperties = [
    {
      id: 1,
      propertyName: "精装三居室",
      imageKeyword: "modern,apartment",
      tags: ["地铁房", "精装修", "南北通透", "采光好"],
      price: "35000",
      unit: "元/月"
    },
    {
      id: 2,
      propertyName: "豪华两居室",
      imageKeyword: "luxury,house",
      tags: ["学区房", "拎包入住", "配套齐全"],
      price: "28000",
      unit: "元/月"
    },
    {
      id: 3,
      propertyName: "温馨一居室",
      imageKeyword: "cozy,studio",
      tags: ["独立卫浴", "阳台", "安静"],
      price: "18000",
      unit: "元/月"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">精选房源</h1>
          <p className="text-gray-600">为您推荐优质房源</p>
        </div>
        
        <div className="flex flex-col items-center gap-8">
          {sampleProperties.map((property) => (
            <PropertyCard
              key={property.id}
              propertyName={property.propertyName}
              imageKeyword={property.imageKeyword}
              tags={property.tags}
              price={property.price}
              unit={property.unit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
