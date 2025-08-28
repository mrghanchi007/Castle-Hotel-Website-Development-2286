import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './SafeIcon';

const { FiHome, FiChevronRight } = FiIcons;

const Breadcrumb = ({ items }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center space-x-2 text-sm text-gray-600 mb-8"
    >
      <Link
        to="/"
        className="flex items-center space-x-1 hover:text-primary transition-colors"
      >
        <SafeIcon icon={FiHome} className="w-4 h-4" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <SafeIcon icon={FiChevronRight} className="w-4 h-4 text-gray-400" />
          {index === items.length - 1 ? (
            <span className="text-gray-900 font-medium">{item.name}</span>
          ) : (
            <Link
              to={item.path}
              className="hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </motion.nav>
  );
};

export default Breadcrumb;