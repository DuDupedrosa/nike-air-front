import { url } from 'inspector';
import React from 'react';
import bgLeft from '../../assets/images/blur-left.png';
import bgRight from '../../assets/images/blur-Right.png';
import Image from 'next/image';
import TheHeader from '../TheHeader';
import GenerateLayoutButton from '../Buttons/GenerateLayout';
import Select from 'react-select';

const TheHome = () => {
  const [selectedOption, setSelectedOption] = React.useState<{
    label: string;
    value: string;
  } | null>();

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: '#ffffff',
      border: '2px solid #181b23',
      color: '#000000',
      minHeight: '44px',
      minWidth: '120px',
      marginTop: '10px',
      ':hover': {
        borderColor: '#181b23',
      },
    }),
    option: (styles: any) => {
      return {
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        padding: '8px',
        ':hover': {
          backgroundColor: '#7c3aed',
        },
        fontSize: '16px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400',
        transition: '0.2s',
      };
    },
    multiValue: (styles: any) => {
      return {
        ...styles,
        backgroundColor: '#7c3aed',
      };
    },
    multiValueLabel: (styles: any) => ({
      ...styles,
      color: '#000000',
      fontSize: '12px',
      fontWeight: 'normal',
      fontFamily: 'Roboto, sans-serif',
    }),
  };

  // ajustar values dps
  const selectedOptions = [
    {
      label: 'Nike air',
      value: 'nikeAir',
    },
    {
      label: 'Dunk',
      value: 'dunk',
    },
  ];

  const handleSelectedOptions = (e: any) => {
    setSelectedOption(e);
  };

  return (
    <div
      className="bg-main h-screen"
      style={{
        backgroundImage: `url(${bgLeft.src}), url(${bgRight.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom left, top right',
        backgroundSize: '600px, 600px',
      }}
    >
      <div className="md:pl-16 md:pr-16 pl-5 pr-5">
        <TheHeader />
        <div className="grid place-items-center mt-24">
          <h1 className="text-6xl max-w-[820px] leading-normal font-poppins font-bold text-[#d1d5db] text-center">
            Generating dream layouts{' '}
            <span className="text-[#8257E5]">using AI</span> for everyone.
          </h1>
          <p className="text-base text-[#9ca3af] leading-normal font-roboto text-center mt-5 max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            tenetur est incidunt hic voluptatibus iste officia a quos corporis
            fugit. Dolor incidunt modi veniam adipisci itaque et blanditiis non
            corporis.
          </p>
          <div className="mt-16">
            <form>
              <div className="flex items-end gap-4">
                <div className="w-[220px]">
                  <label
                    htmlFor="product"
                    className="block text-white text-lg mb-2 font-poppins"
                  >
                    Produto
                  </label>
                  <Select
                    id="product"
                    className="m-0 w-full text-base text-black rounded-lg"
                    options={selectedOptions}
                    styles={colourStyles}
                    placeholder="Selecione"
                    onChange={(e) => handleSelectedOptions(e)}
                  />
                </div>
                <div className="w-[220px]">
                  <label
                    htmlFor="theme"
                    className="block text-white text-lg mb-2 font-poppins"
                  >
                    Tema
                  </label>
                  <input
                    type="text"
                    name="theme"
                    className="text-base text-black font-roboto p-2 w-full border-2 border-solid border-[#111111] rounded-lg"
                  />
                </div>
              </div>
              <div className="grid place-items-center mt-8">
                <GenerateLayoutButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheHome;
