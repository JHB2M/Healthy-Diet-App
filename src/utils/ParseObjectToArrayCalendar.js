export default function (data) {
  const arr = [];
  

  arr.push('calories :');
  arr.push(data.calories);
  arr.push('serving_size :');
  arr.push(data.serving_size_g);
  arr.push('fat_total :');
  arr.push(data.fat_total_g);
  arr.push('protein_g :');
  arr.push(data.protein_g);
  arr.push('sodium_mg :');
  arr.push(data.sodium_mg);
  arr.push('potassium_mg :');
  arr.push(data.potassium_mg);
  arr.push('cholesterol_mg :');
  arr.push(data.cholesterol_mg);
  arr.push('carbohndrates_g :');
  arr.push(data.carbohydrates_total_g);
  arr.push('sugar_g :');
  arr.push(data.sugar_g);
  return arr;
}
