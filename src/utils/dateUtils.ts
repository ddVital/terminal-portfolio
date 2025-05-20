export function calculateDuration(startDate: string, endDate: string | null): { years: number; months: number } {
  // Parse the dates manually
  const [startYear, startMonth] = startDate.split('-').map(Number);
  const start = new Date(startYear, startMonth - 1); // Adjust for 0-indexed months
  
  let end;
  if (endDate) {
    const [endYear, endMonth] = endDate.split('-').map(Number);
    end = new Date(endYear, endMonth - 1); // Adjust for 0-indexed months
  } else {
    end = new Date();
  }
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return { years, months };
}
