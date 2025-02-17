
export const useReusableGradient = () => {
    const arrOfGradients = [
        "bg-gradient-to-r from-[#6ec4c7] to-[#C8A2C8]", 
        "bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]",
        "bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]",
        "bg-gradient-to-r from-[#11998e] to-[#38ef7d]", 
        "bg-gradient-to-r from-[#2c3e50] to-[#4ca1af]",
        "bg-gradient-to-r from-[#434343] to-[#6d597a]",
        "bg-gradient-to-r from-[#92dcde] to-[#6ec4c7]", 
        "bg-gradient-to-r from-[#232526] to-[#414345]",
      ];
      const [gradient, setGradient] = useState(arrOfGradients[0]);
       const randomBg = () => {
        const randomNumbers = Math.floor(Math.random() * arrOfGradients.length);
        console.log(arrOfGradients[randomNumbers]);
        setGradient(arrOfGradients[randomNumbers]);
      };
      useEffect(() => {
        const interval = setInterval(() => {
          randomBg();
        }, 2000);
    
        return () => clearInterval(interval);
      }, []); 
  }