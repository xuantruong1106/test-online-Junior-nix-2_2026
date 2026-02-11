interface TelexResult {
  total: number;
  details: string[];
}

class TelexCounter {
  public static extract(inputString: string | null): TelexResult | null {
    try {
      if (!inputString) return null;

      const trimmedInput = inputString.trim();
      if (!trimmedInput) return null;

      if (!/^[a-zA-Z]+$/.test(trimmedInput)) {
        throw new Error(`[Lỗi] "${trimmedInput}": Chỉ chấp nhận các chữ cái latinh.`);
      }

      const foundCharacters: string[] = [];
      let currentIndex = 0;
      
      const normalizedString = trimmedInput.toLowerCase();
      const stringLength = normalizedString.length;
      
      const doubleCharRules = new Set(['aw', 'aa', 'dd', 'ee', 'oo', 'ow']);

      while (currentIndex < stringLength) {
        const currentTwoChars = normalizedString.substring(currentIndex, currentIndex + 2);

        if (currentTwoChars.length === 2 && doubleCharRules.has(currentTwoChars)) {
          foundCharacters.push(currentTwoChars); 
          currentIndex += 2; 
        } 
        else if (normalizedString[currentIndex] === 'w') {
          foundCharacters.push('w');
          currentIndex += 1; 
        } 
        else {
          currentIndex += 1; 
        }
      }

      return {
        total: foundCharacters.length,
        details: foundCharacters
      };

    } catch (error: any) {
      console.error(error.message);
      return null; 
    }
  }
}


function startBrowserInteraction(): void {
  const userInput = window.prompt('Nhập chuỗi latinh (hoặc nhấn Cancel để thoát):');

  if (userInput === null) {
    console.log("Đã thoát chương trình!");
    return;
  }

  console.log(`Input: ${userInput}`)

  const result = TelexCounter.extract(userInput);
  
  if (result !== null) {
    const formattedDetails = result.details.join(', ');
    console.log(`Output: ${result.total} (${formattedDetails})`);
  }
  startBrowserInteraction();
}

startBrowserInteraction();
