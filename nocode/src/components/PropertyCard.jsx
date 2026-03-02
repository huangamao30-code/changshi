import React from 'react';
import { QrCode } from 'lucide-react';

const PropertyCard = ({ 
  propertyName = "精装三居室", 
  imageKeyword = "house,apartment",
  tags = ["地铁房", "精装修", "南北通透", "采光好"],
  price = "35000",
  unit = "元/月"
}) => {
  return (
    <div className="w-[375px] h-[497px] bg-white shadow-[0px_8px_36px_rgba(0,0,0,0.1)] rounded-[24px] flex flex-col overflow-hidden">
      {/* 封面图片区域 */}
      <div className="relative w-[375px] h-[373px]">
        <img 
          src={`https://photo.bj.ide.test.sankuai.com/?keyword=${imageKeyword}&width=375&height=373`}
          alt={propertyName}
          className="w-full h-full mx-auto object-cover"
        />
        {/* 渐变遮罩 */}
        <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* 内容区域 */}
      <div className="relative w-[375px] h-[124px] flex flex-col items-start p-[2px_24px_24px] gap-[20px] isolate">
        {/* 基础信息 */}
        <div className="w-[327px] h-[53px] flex flex-col items-start gap-[4px]">
          {/* 房源名称 */}
          <h1 className="w-[327px] h-[28px] font-medium text-[20px] leading-[28px] text-[#333333] font-['PingFang_SC']">
            {propertyName}
          </h1>
          
          {/* 亮点标签 */}
          <div className="w-[327px] h-[21px] flex flex-row items-start gap-[4px]">
            {tags.map((tag, index) => (
              <div 
                key={index}
                className={`flex flex-row justify-center items-center px-[6px] gap-[2px] h-[21px] rounded-[4px] ${
                  index === 0 
                    ? 'bg-[#1F83FC] opacity-90' 
                    : 'bg-[#E9F2FE]'
                }`}
              >
                <span className={`h-[21px] font-normal text-[13px] leading-[21px] font-['PingFang_SC'] ${
                  index === 0 
                    ? 'text-white' 
                    : 'text-[#1F83FC] opacity-75'
                }`}>
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 价格区域 */}
        <div className="w-[158px] h-[25px] flex flex-row items-baseline gap-[2px] z-10">
          <span className="h-[21px] font-bold text-[30px] leading-[26px] text-[#FF5962] font-['DIN']">
            {price}
          </span>
          <span className="h-[20px] font-normal text-[16px] leading-[20px] text-[#FF5962] font-['PingFang_SC'] whitespace-nowrap">
            {unit}
          </span>
        </div>

        {/* 右侧渐变遮罩和二维码 */}
        <div className="absolute w-[160px] right-0 top-0 bottom-0 flex flex-row justify-end items-end p-[24px_20px] bg-gradient-to-l from-[#F8F9F9] via-[#F8F9F9] to-transparent z-20">
          <div className="w-[72px] h-[72px] bg-[#0063DB] opacity-80 flex items-center justify-center rounded">
            <QrCode className="w-[48px] h-[48px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
