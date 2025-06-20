'use client';

interface SignOutProps {
  onSignOut: () => Promise<void>;
}

const clearBrowserData = () => {
  // LocalStorage-ni tozalash
  localStorage.clear();
  
  // SessionStorage-ni tozalash
  sessionStorage.clear();
  
  // Cookie-larni tozalash
  document.cookie.split(";").forEach((c) => {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
};

const SignOut = ({ onSignOut }: SignOutProps) => {
  const handleClick = async () => {
    try {
      // Avval browser ma'lumotlarini tozalash
      clearBrowserData();
      
      // Keyin server-side logout
      await onSignOut();
      
      // Sahifani yangilash
      window.location.reload();
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#ff6900] text-white px-4 py-2 rounded-lg hover:bg-[#ff8124] transition-colors"
    >
      Chiqish
    </button>
  );
};

export default SignOut;
