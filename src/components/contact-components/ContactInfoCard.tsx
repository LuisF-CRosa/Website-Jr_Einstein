import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function ContactInfoCard({ icon, title, description }: Props) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-sm shadow-sm p-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-[#E7F2F1] flex items-center justify-center border border-[#dfecec]">
        {icon}
      </div>

      <div>
        <div className="text-[#217a73] font-semibold">{title}</div>
        <div className="text-gray-600 text-sm">{description}</div>
      </div>
    </div>
  );
}
