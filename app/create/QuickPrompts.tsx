export function QuickPrompts() {
  const prompts = [
    "Create a product showcase video",
    "Generate social media ad variations",
    "Help me edit my existing video",
    "Create captions for my video",
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-gray-400">Quick Prompts</h3>
      {prompts.map((prompt, i) => (
        <button
          key={i}
          className="w-full text-left bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}