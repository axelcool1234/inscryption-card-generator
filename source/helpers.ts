export const getGemCostResourceId = (gems: ('orange1' | 'green1' | 'blue1' | 'orange2' | 'green2' | 'blue2' | 'orange3' | 'green3' | 'blue3')[]) => {
  const level1: string[] = [];
  const level2: string[] = [];
  const level3: string[] = [];

  for (const gem of gems) {
    if (gem.includes('1')) {
      prioritizeAndPush(gem.replace('1', ''), level1);
    }
    if (gem.includes('2')) {
      prioritizeAndPush(gem.replace('2', ''), level2);
    }
    if (gem.includes('3')) {
      prioritizeAndPush(gem.replace('3', ''), level3);
    }
  }

  const combo = (level1[0] || '').charAt(0) + (level2[0] || '').charAt(0) + (level3[0] || '').charAt(0);
  const combination = combo.split('').filter(level => level !== '');
  const resourceId = combination.length > 0 ? `mox-${combination.join('')}` : undefined;
  console.log(resourceId);
  return resourceId;
};

const prioritizeAndPush = (color: string, levelArray: string[]) => {
  const colorPriority = ['orange', 'green', 'blue'];
  const existingIndex = colorPriority.indexOf(levelArray[0]);
  const newIndex = colorPriority.indexOf(color);

  if (newIndex !== -1 && (existingIndex === -1 || newIndex < existingIndex)) {
    levelArray.unshift(color);
  }
};