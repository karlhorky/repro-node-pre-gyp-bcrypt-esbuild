import bcrypt from 'bcrypt';

console.log(await bcrypt.hash('x', 10));
