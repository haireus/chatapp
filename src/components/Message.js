import React from 'react';
import { formatRelative } from 'date-fns';

const formatDate = date => {
  let formattedDate = '';
  if (date) {
    // Convert the date in words relative to the current date
    formattedDate = formatRelative(date, new Date());
    // Uppercase the first letter
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
};

const Message = ({message, user}) => {
  if (!message?.text) return null;
  console.log(message);
  return (
    <div className={`px-4 py-4 rounded-md hover:bg-gray-50 dark:hover:bg-coolDark-600 overflow-hidden flex items-end ${message?.uid ===user?.uid ? "justify-end" : 'justify-start' }`}>
     
      {message?.photoURL && message?.uid!== user?.uid ? (
        <img
          src={message?.photoURL}
          alt="Avatar"
          className="rounded-full mr-4"
          width={45}
          height={45}
        />
      ) : null}
      <div>
        <div className="flex items-center mb-1">
          {message?.displayName && message?.uid !==user?.uid ? (
            <p className="mr-2 text-primary-500">{message?.displayName}</p>
          ) : null}
          {message?.createdAt?.seconds ? (
            <span className="text-gray-500 text-xs">
              {formatDate(new Date(message?.createdAt.seconds * 1000))}
            </span>
          ) : null}
        </div>
        <p>{message?.text}</p>
      </div>
    
    
    </div>
  );
};

export default Message;
