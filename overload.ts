class User {
	public skills: string[] = [];
	
	public addSkill(skill: string): void;
	public addSkill(skill: string[]): void;
	public addSkill(skillOrSkills: string | string[]): void {
		if(typeof skillOrSkills === 'string') {
			this.skills.push(skillOrSkills);
		}

		if(Array.isArray(skillOrSkills)) {
			this.skills = [...this.skills, ...skillOrSkills];
		}
	}
}

const user = new User();

user.addSkill('react');
user.addSkill(['typesScrirpt', 'docker']);

console.log(user.skills);