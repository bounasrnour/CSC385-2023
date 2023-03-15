import numpy as np 

world_size = 32
grid = np.ones((world_size,world_size))
grid1 = []
spike_numbers = 8
for i in range(world_size):
    for j in range(world_size):
        grid1.append((i,j, 0))


print(grid , "\n\n\n")
print(grid1)