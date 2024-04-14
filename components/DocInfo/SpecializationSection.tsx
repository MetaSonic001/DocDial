import React from 'react';

interface SpecializationSectionProps {
  specialization: string[];
}

const SpecializationSection: React.FC<SpecializationSectionProps> = ({
  specialization,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Specialization</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {specialization.map((spec, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={`/specialization-${index + 1}.jpg`}
              alt={spec}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{spec}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializationSection;