export default function (data) {
  const arr = [];
  const arr2 = Object.values(data);
  console.log(arr2+'//////////')
  arr.push('Calories :');
  arr.push(arr2[1]);
  arr.push('Size(g) :');
  arr.push(arr2[2]);
  arr.push('Fat :');
  arr.push(arr2[3]);
  arr.push('Protein :');
  arr.push(arr2[5]);
  arr.push('Sodium(mg) :');
  arr.push(arr2[6]);
  arr.push('Potassium(mg):');
  arr.push(arr2[7]);
  arr.push('Cholestrol(mg) :');
  arr.push(arr2[8]);
  arr.push('Carbohndrates :');
  arr.push(arr2[9]);
  arr.push('Sugar :');
  arr.push(arr2[11]);
  return arr;
}
