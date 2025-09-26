const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-pink-500 rounded-full animate-spin origin-bottom"></div>
        <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full animate-spin origin-top [animation-delay:-0.4s]"></div>
        <div className="absolute left-0 top-1/2 w-3 h-3 bg-blue-500 rounded-full animate-spin origin-right [animation-delay:-0.8s]"></div>
        <div className="absolute right-0 top-1/2 w-3 h-3 bg-green-500 rounded-full animate-spin origin-left [animation-delay:-1.2s]"></div>
      </div>
    </div>
  );
};

export default Loading;
