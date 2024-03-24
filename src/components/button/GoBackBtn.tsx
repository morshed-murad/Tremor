const GoBackBtn = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-500/80 text-blue-700 dark:bg-gray-800 dark:text-blue-500 py-2 px-4 rounded dark:hover:bg-gray-800/80"
      onClick={handleBack}
    >
      Back
    </button>
  );
};

export default GoBackBtn;
