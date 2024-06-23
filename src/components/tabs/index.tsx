interface TabsProps extends React.PropsWithChildren { }

interface TabProps extends React.PropsWithChildren {
  title: string;
  isActive: boolean;
  onTabClick: () => void;
}

function Tabs({
  children
}: TabsProps) {

  return (
    <div role="tablist" className="tabs tabs-lifted">
      {children}
    </div>
  );
}

function Tab({
  title,
  isActive,
  onTabClick,
  children,
}: TabProps) {

  return (
    <>
      <input
        className="tab [--tab-border-color:oklch(var(--nc))]"
        role="tab"
        type="radio"
        name={title}
        aria-label={title}
        checked={isActive}
        onChange={onTabClick}
      />
      <div
        className="tab-content p-6 border-t-neutral-content"
        role="tabpanel"
      >
        {children}
      </div>
    </>
  );
}

Tabs.Tab = Tab;

export { Tabs };
