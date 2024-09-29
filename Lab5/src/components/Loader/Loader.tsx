import React from 'react';
import './Spiner.css';

const LoaderSpiner = () => {
  return <div className="loader"></div>;
};

const Loader = ({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading: boolean;
}) => {
  return (
    <div>
      {isLoading && <LoaderSpiner />}
      {children}
    </div>
  );
};

export default Loader;
