import { useState } from "react";

const sessionInitialState = {
   user: {},
   token: '',
   status: 'unauthenticated'
};

const generateToken = () => {
   return Math.random().toString(36).substring(2);
};

export const useSession = () => {
   const [session, setSession] = useState(sessionInitialState);

   const generateSession = (user) => {
      const token = generateToken();

      const newUserSession = {
         user,
         token,
         status: 'authenticated'
      };

      setSession(newUserSession);
   };

   return { data: session, generateSession };
};
