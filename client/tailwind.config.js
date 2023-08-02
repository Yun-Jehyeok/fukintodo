/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        gnb: "#1C2434",
      },
      fontFamily: {
        base: "Satoshi",
      },
      backgroundImage: {
        alarm: `url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.2 14.9343L15.6375 14.0624C15.525 13.8937 15.4688 13.7249 15.4688 13.528V7.67803C15.4688 6.01865 14.7657 4.47178 13.4719 3.31865C12.4313 2.39053 11.0813 1.7999 9.6469 1.6874V1.1249C9.6469 0.787402 9.36565 0.478027 9.00002 0.478027C8.66252 0.478027 8.35315 0.759277 8.35315 1.1249V1.65928C8.2969 1.65928 8.24065 1.65928 8.1844 1.6874C4.9219 2.05303 2.47502 4.66865 2.47502 7.79053V13.528C2.4469 13.8093 2.39065 13.9499 2.3344 14.0343L1.80002 14.9343C1.63127 15.2155 1.63127 15.553 1.80002 15.8343C1.96877 16.0874 2.25002 16.2562 2.5594 16.2562H8.38127V16.8749C8.38127 17.2124 8.66252 17.5218 9.02815 17.5218C9.36565 17.5218 9.67503 17.2405 9.67503 16.8749V16.2562H15.4688C15.7782 16.2562 16.0594 16.0874 16.2282 15.8343C16.3969 15.553 16.3969 15.2155 16.2 14.9343ZM3.2344 14.9905L3.43127 14.653C3.60002 14.3718 3.6844 14.0343 3.74065 13.6405V7.79053C3.74065 5.31553 5.7094 3.23428 8.32503 2.95303C9.92815 2.78428 11.5031 3.2624 12.6563 4.2749C13.6688 5.1749 14.2313 6.38428 14.2313 7.67803V13.528C14.2313 13.9499 14.3438 14.3437 14.5969 14.7374L14.7657 14.9905H3.2344Z' fill='%2364748B'/%3E%3C/svg%3E%0A")`,
        chat: `url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.9687 1.57495H7.03123C3.43123 1.57495 0.506226 4.41558 0.506226 7.90308C0.506226 11.3906 2.75623 13.8375 8.26873 16.3125C8.40935 16.3687 8.52185 16.3968 8.66248 16.3968C8.85935 16.3968 9.0281 16.3406 9.19685 16.2281C9.4781 16.0593 9.64685 15.75 9.64685 15.4125V14.2031H10.9687C14.5687 14.2031 17.5219 11.3625 17.5219 7.87495C17.5219 4.38745 14.5687 1.57495 10.9687 1.57495ZM10.9687 12.9937H9.33748C8.8031 12.9937 8.3531 13.4437 8.3531 13.9781V15.0187C3.59998 12.825 1.74373 10.8 1.74373 7.9312C1.74373 5.14683 4.10623 2.8687 7.03123 2.8687H10.9687C13.8656 2.8687 16.2562 5.14683 16.2562 7.9312C16.2562 10.7156 13.8656 12.9937 10.9687 12.9937Z' fill='%2364748B'/%3E%3Cpath d='M5.42812 7.28442C5.0625 7.28442 4.78125 7.56567 4.78125 7.9313C4.78125 8.29692 5.0625 8.57817 5.42812 8.57817C5.79375 8.57817 6.075 8.29692 6.075 7.9313C6.075 7.56567 5.79375 7.28442 5.42812 7.28442Z' fill='%2364748B'/%3E%3Cpath d='M9.00002 7.28442C8.6344 7.28442 8.35315 7.56567 8.35315 7.9313C8.35315 8.29692 8.6344 8.57817 9.00002 8.57817C9.33752 8.57817 9.6469 8.29692 9.6469 7.9313C9.6469 7.56567 9.33752 7.28442 9.00002 7.28442Z' fill='%2364748B'/%3E%3Cpath d='M12.5718 7.28442C12.2062 7.28442 11.9249 7.56567 11.9249 7.9313C11.9249 8.29692 12.2062 8.57817 12.5718 8.57817C12.9374 8.57817 13.2187 8.29692 13.2187 7.9313C13.2187 7.56567 12.9093 7.28442 12.5718 7.28442Z' fill='%2364748B'/%3E%3C/svg%3E%0A")`,
        name: `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.5'%3E%3Cpath d='M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z' fill='%2364748B'/%3E%3Cpath d='M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z' fill='%2364748B'/%3E%3C/g%3E%3C/svg%3E%0A");`,
        email: `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.5'%3E%3Cpath d='M19.2496 3.30005H2.74961C1.58086 3.30005 0.583984 4.26255 0.583984 5.46567V16.6032C0.583984 17.7719 1.54648 18.7688 2.74961 18.7688H19.2496C20.4184 18.7688 21.4152 17.8063 21.4152 16.6032V5.4313C21.4152 4.26255 20.4184 3.30005 19.2496 3.30005ZM19.2496 4.84692C19.284 4.84692 19.3184 4.84692 19.3527 4.84692L10.9996 10.2094L2.64648 4.84692C2.68086 4.84692 2.71523 4.84692 2.74961 4.84692H19.2496ZM19.2496 17.1532H2.74961C2.40586 17.1532 2.13086 16.8782 2.13086 16.5344V6.35942L10.1746 11.5157C10.4152 11.6875 10.6902 11.7563 10.9652 11.7563C11.2402 11.7563 11.5152 11.6875 11.7559 11.5157L19.7996 6.35942V16.5688C19.8684 16.9125 19.5934 17.1532 19.2496 17.1532Z' fill='%2364748B'/%3E%3C/g%3E%3C/svg%3E%0A");`,
        pw: `url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.5'%3E%3Cpath d='M16.1566 6.80626V5.91251C16.1566 3.16251 14.0941 0.825009 11.4816 0.618759C10.0379 0.481259 8.59414 0.996884 7.52852 1.95938C6.46289 2.92188 5.84414 4.29688 5.84414 5.70626V6.80626C3.85039 7.18438 2.33789 8.93751 2.33789 11.0688V17.2906C2.33789 19.5594 4.19414 21.3813 6.42852 21.3813H15.5035C17.7723 21.3813 19.6285 19.525 19.6285 17.2563V11C19.6629 8.93751 18.1504 7.21876 16.1566 6.80626ZM8.55977 3.09376C9.31602 2.40626 10.3129 2.06251 11.3441 2.16563C13.166 2.33751 14.6098 3.98751 14.6098 5.91251V6.70313H7.39102V5.67188C7.39102 4.70938 7.80352 3.78126 8.55977 3.09376ZM18.116 17.2906C18.116 18.7 16.9473 19.8688 15.5379 19.8688H6.46289C5.05352 19.8688 3.91914 18.7344 3.91914 17.325V11.0688C3.91914 9.52188 5.15664 8.28438 6.70352 8.28438H15.2973C16.8441 8.28438 18.116 9.52188 18.116 11V17.2906Z' fill='%2364748B'/%3E%3Cpath d='M10.9996 11.8594C10.5871 11.8594 10.209 12.2031 10.209 12.65V16.2594C10.209 16.6719 10.5527 17.05 10.9996 17.05C11.4121 17.05 11.7902 16.7063 11.7902 16.2594V12.6156C11.7902 12.2031 11.4121 11.8594 10.9996 11.8594Z' fill='%2364748B'/%3E%3C/g%3E%3C/svg%3E%0A");`,
      },
      boxShadow: {
        signup: "0 4px 4px rgb(0 0 0 / 0.25)",
      },
    },
  },
  plugins: [],
};
