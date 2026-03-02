import { useState, useEffect } from 'react';

const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟API调用
    const fetchProperties = async () => {
      setLoading(true);
      
      // 模拟延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockProperties = [
        {
          id: 1,
          propertyName: "精装三居室",
          imageKeyword: "modern,apartment",
          tags: ["地铁房", "精装修", "南北通透", "采光好"],
          price: "35000",
          unit: "元/月",
          location: "朝阳区",
          area: "120㎡"
        },
        {
          id: 2,
          propertyName: "豪华两居室",
          imageKeyword: "luxury,house",
          tags: ["学区房", "拎包入住", "配套齐全"],
          price: "28000",
          unit: "元/月",
          location: "海淀区",
          area: "95㎡"
        },
        {
          id: 3,
          propertyName: "温馨一居室",
          imageKeyword: "cozy,studio",
          tags: ["独立卫浴", "阳台", "安静"],
          price: "18000",
          unit: "元/月",
          location: "西城区",
          area: "65㎡"
        }
      ];
      
      setProperties(mockProperties);
      setLoading(false);
    };

    fetchProperties();
  }, []);

  return {
    properties,
    loading,
    setProperties
  };
};

export default useProperties;
