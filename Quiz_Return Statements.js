function locationizer(work_obj)
{
	locations = []
	for(cont in work_obj.Jobs)
	{
		
		locations.push(work_obj.Jobs[cont].location);
	}

	return locations;

}