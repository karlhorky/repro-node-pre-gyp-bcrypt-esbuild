import bcrypt from 'bcryptjs';

console.log(await bcrypt.hash('x', 10));
